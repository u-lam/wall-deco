import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "../components/OrderContext";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  padding: 20px 30px 20px 30px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  align-items: center;
  overflow: scroll;
`;

const ArtCard = styled.div`
  border: 1px solid lightgray;
  height: 480px;
  padding: 20px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 2px 15px;
  background-color: #36454f;
  /* background: linear-gradient(#ffac64, #dc9154); */
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;

  :hover {
    /* color: #000; */
    background-color: #f4a15d;
    background: linear-gradient(#ffac64, #dc9154);
    color: #fff;
    ::after {
      width: 100%;
    }
  }
`;

const WallArt = ({ data }) => {
  const [order, setOrder] = useContext(OrderContext);
  // console.log(data);
  const artArray = data.art.nodes.map(node => {
    let artist = node.credit.split(" ");
    return (
      <ArtCard>
        <Img
          fluid={node.wallArtImg.asset.fluid}
          alt={node.title}
          style={{
            border: "2px solid gray",
            borderRadius: 15,
            height: 300
          }}
        />
        <h3
          style={{
            marginBottom: 10,
            marginTop: 10
          }}
        >
          <Link to={`/art/${node.slug.current}`}>{node.title}</Link>
        </h3>
        <h4
          style={{
            marginBottom: 30,
            marginTop: 10
          }}
        >
          By {artist[0]} {artist[1]}
        </h4>
        <Button onClick={() => setOrder([...order, node])}>Add to Cart</Button>
      </ArtCard>
    );
  });
  return (
    <Layout>
      <Container>{artArray}</Container>
    </Layout>
  );
};

export const query = graphql`
  query AllArt {
    art: allSanityWallArt {
      nodes {
        title
        slug {
          current
        }
        credit
        category {
          title
          description
        }
        wallArtImg {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default WallArt;
