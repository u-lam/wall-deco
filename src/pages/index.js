import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import background from "../images/mountain.jpg";

const Container = styled.div`
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 90vh;
  /* position: fixed;
  top: 0;
  left: 0; */
`;

// const backgroundStyles = css`

// `;

const Home = () => {
  return (
    <Layout>
      <Container>Text go here</Container>
    </Layout>
  );
};

export default Home;
