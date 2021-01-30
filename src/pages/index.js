import * as React from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import background from "../images/bg.png";

// trying a different landing page
// import background from "../images/mountain.jpg";

const Container = styled.div`
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 82vh;
  /* header takes up 8vh */
  /* footer will take the other 10vh */
`;

const CatchPhrase = styled.div`
  display: -webkit-flex; /* safari */
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Mulish", sans-serif;
`;

const divStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const h1Styles = css`
  margin: 0 auto;
  font-weight: 300;
`;

const h1BoldStyles = css`
  margin: 0 auto;
  font-weight: 700;
`;

const Home = () => {
  return (
    <Layout>
      <Container>
        <CatchPhrase>
          <div styles={divStyles}>
            <div>
              <h1 css={h1Styles}>The best photography</h1>
            </div>
            <div css={{ textAlign: "center" }}>
              <h1 css={h1BoldStyles}>on your wall</h1>
            </div>
          </div>
        </CatchPhrase>
      </Container>
    </Layout>
  );
};

export default Home;
