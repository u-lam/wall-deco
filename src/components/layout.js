import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./header";
import Footer from "./footer";

// use Global styles to create fonts, font-size, primary & secondary colors, buttons, etc.

const Wrapper = styled("div")`
  border: 5px solid green;
  padding: 5px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          html {
            font-size: 16px;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            font-family: "Menlo", monospace;
            font-weight: 500;
            line-height: 1.6;
          }

          main {
            width: 90%;
            margin: 0 auto;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            overflow: hidden;
          }

          li {
            display: inline-block;
            margin-left: 15px;
            padding-right: 15px;
            /* border-right: 1px solid #ececec; */
          }

          ul li:last-of-type {
            /* border-right: none; */
          }

          img {
            max-width: 100%;
          }
          p {
            margin-bottom: 5px;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: bold;
          }

          h1 {
            font-size: 2.5rem;
            line-height: 1.25em;
            margin-bottom: 30px;
          }
          h2 {
            font-size: 2em;
            line-height: 1.25em;
            margin-bottom: 25px;
          }
          h3 {
            font-size: 1.75em;
            line-height: 1.2em;
            margin-bottom: 20px;
          }
          h4 {
            font-size: 1.25em;
            line-height: 0.9em;
            margin-bottom: 15px;
          }
          h5 {
            font-size: 1em;
            line-height: 0.85em;
            margin-bottom: 10px;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
