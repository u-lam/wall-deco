import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import cart from "../images/cart.svg";

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  background-color: #fff;
  /* if background image is mountaing, go with this, and black font
  background-color: #1d1f20; */
  font-family: "Philosopher", sans-serif;
  text-align: right;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* box-shadow: 0 5px 5px -5px #777;
  -webkit-box-shadow: 0 5px 5px -5px #777
  -moz-box-shadow: 0 5px 5px -5px #777; */

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: #f4a15d;
  text-decoration: none;
  margin: 0 1.2rem;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    /* adds a line transition upon hover */
    content: ".";
    color: transparent;
    background: #000;
    height: 1px;
    transition: all 0.3s ease-in;
  }

  :hover {
    color: #000;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1rem;
    z-index: 6;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /* changing colors and size */
  color: #000;
  font-size: 2rem;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Nav = () => (
  <Container>
    <LogoWrapper as={Link} to='/'>
      {/* <Img src={logo} alt='logos' /> */}
      WDArt
    </LogoWrapper>

    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/blogs'>Blogs</StyledLink>

    {/* <StyledLink to='/about/'>About</StyledLink>
    <StyledLink to='/404'>Contact</StyledLink> */}
    <StyledLink to='/products/'>Products</StyledLink>
    <StyledLink to='/cart/'>
      <Img src={cart} alt='cart' />
    </StyledLink>
  </Container>
);

export default Nav;
