import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  max-width: 800px;
  height: calc(100vh - 7vh - 220px);
  min-height: calc(100vh - 7vh - 220px);
  padding: 20px 30px 20px 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: scroll;
  color: teal;
  h1 {
   text-align: center;
 }
 @media (max-width: 700px) {
  flex-direction: column;
 }
`;
const AboutText = styled.div`
  max-width: 500px;
  font-size: 18px;
  p {
    margin-bottom: 16px;
  }
`
const Cool = styled.a`
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

const About = () => {
  return (
    <Layout>
        <Container>
        <h1>A E-commerce Application Prototype</h1>
          <AboutText>
        <p>This site was built with Gatsby, Stripe, Sanity, Emotion, React.</p>
            <p>It was built By <Cool href='https://github.com/u-lam' target='_blank'>Uyen Lam</Cool> and <Cool  href='https://www.jamessinkler.com' target='_blank'>James Sinkler</Cool>, as a prototype to leverage fast static sites by Gatsby, with dynamic content using Sanity Studios / Unsplash / and Stripe Payments.</p>
        <p>If you want to work with either of the develelopers feel free to reach out.</p>
          </AboutText>
        </Container>
    </Layout>
  );
};

export default About;
