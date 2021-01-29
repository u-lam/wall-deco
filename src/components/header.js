import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import logo from "../images/logo.svg";

const Container = styled.div`
  padding: 0 1rem;
  margin: 0.3rem auto;
  width: 100%;
  background-color: #d147a3;
  text-align: right;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
  color: white;
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
    background: goldenrod;
    height: 1px;
    transition: all 0.3s ease-in;
  }

  :hover {
    color: goldenrod;
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
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
`;

const Nav = () => (
  <Container>
    <LogoWrapper as={Link} to='/'>
      <Img src={logo} alt='logos' />
    </LogoWrapper>

    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/about/'>About</StyledLink>
    <StyledLink to='/404'>Contact</StyledLink>
    <StyledLink to='/shop/'>Shop</StyledLink>
    <StyledLink to='/cart/'>Cart</StyledLink>
  </Container>
);

export default Nav;
