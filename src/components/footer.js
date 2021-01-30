import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "./Link";

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  background-color: #1d1f20;
  font-family: "Philosopher", sans-serif;
  /* text-align: right; */
  height: 10vh;
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */

  @media (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Container>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/blogs'>Blogs</StyledLink>
      <StyledLink to='/about/'>About</StyledLink>
      <StyledLink to='/404'>Contact</StyledLink>
      <StyledLink to='/products/'>Products</StyledLink>
    </Container>
  );
};

export default Footer;
