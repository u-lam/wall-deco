import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import fb from "../images/fb.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import slack from "../images/slack.png";

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 220px;

  /* position: absolute;
  left: 0;
  right: 0;
  bottom: 0; */

  /* height: auto; */
  background-color: #1d1f20;
  color: #fff;
  font-family: "Philosopher", sans-serif;
  text-align: center;
  /* GRID */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0.5fr) 0.3fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  justify-items: center;
  align-items: center;
`;

// *** LOGO ***
const Logo = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  font-size: 1.7rem;
`;

const logoStyles = css`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const linkStyles = css`
  text-decoration: none;
  color: #fff;
`;

// *** ADDRESS  ***
const Address = styled.div`
  grid-area: 1 / 2 / 3 / 3;
`;

const addStyles = css`
  margin: 0 auto;
  padding-bottom: 10px;
`;

// *** PHONE &  SOCIAL ICONS ***
const Phone = styled.div`
  grid-area: 1 / 3 / 3 / 4;
`;

const phoneStyles = css`
  margin: 0 auto;
  color: #b0ddc2;
  padding-bottom: 2rem;
`;

const Social = styled.div`
  grid-area: 2 / 3 / 3 / 5;
  margin-bottom: 1rem;
`;

const icons = css`
  margin-top: 2.5rem;
  width: 30px;
  height: 30px;

  :hover {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;

// *** CREDITS ***
const Credits = styled.div`
  margin-top: 0.9rem;
  padding-bottom: 0.3rem;
  grid-area: 3 / 1 / 4 / 4;
`;

const rainbow = css`
  background-image: gradient(
    linear,
    left top,
    right top,
    color-stop(0, violet),
    color-stop(0.15, orange),
    color-stop(0.55, yellow),
    color-stop(1, violet)
  );
  color: transparent;
  background-clip: text;

  /* for webkit browsers Chrome and Safari */
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, violet),
    color-stop(0.15, orange),
    color-stop(0.55, yellow),
    color-stop(1, violet)
  );
  -webkit-background-clip: text;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>
        <div css={logoStyles}>
          <Link css={linkStyles} to='/'>
            WDArt
          </Link>
        </div>
      </Logo>

      <Address>
        <h4 css={addStyles}>Address</h4>
        <p>123 Collaboration Cir</p>
        <p>San Francisco, CA 94567</p>
      </Address>

      <Phone>
        <h4 css={addStyles}>Connect</h4>
        <h4 css={phoneStyles}>(415) 123-4567</h4>
      </Phone>

      <Social>
        <div>
          <img css={icons} src={linkedin} alt='linkedin' />
          <img css={icons} src={twitter} alt='twitter' />
          <img css={icons} src={slack} alt='slack' />
          <img css={icons} src={fb} alt='facebook' />
        </div>
      </Social>

      <Credits>
        <p>Created with Gatsby, Sanity.io, Snipcart, and styled with Emotion</p>
        <p>
          by <span css={rainbow}>Uyen Lam & James Sinkler </span>&copy; 2021{" "}
        </p>
      </Credits>
    </Container>
  );
};

export default Footer;
