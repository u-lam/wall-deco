import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./header";
import Footer from "./footer";

// use Global styles to create fonts, font-size, primary & secondary colors, buttons, etc.

const Wrapper = styled("div")`
  border: 10px solid green;
  padding: 10px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
