import React, { useState, useEffect, useContext } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    art: sanityWallArt(slug: { current: { eq: $slug } }) {
      title
      wallArtImg {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  /* padding: 20px 30px 20px 30px; */
  background: gray;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
  /* grid-gap: 20px; */
  /* align-items: center; */
  /* overflow: scroll; */
`;

const SingleArt = ({ data, pageContext }) => {
  const { art } = pageContext;
  // console.log(data);
  return (
    <Layout>
      <Container>
        <h1>{art.title}</h1>
        <Img fluid={data.art.wallArtImg.asset.fluid} />
      </Container>
    </Layout>
  );
};
export default SingleArt;
