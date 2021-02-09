import React, {useState, useEffect, useContext} from 'react'; 
import {OrderContext} from '../components/OrderContext'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby';
import { css } from "@emotion/react";
import styled from "@emotion/styled";


const ArtGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 200px)
`;
 
const WallArt = ({ data })=> { 
  const [order, setOrder] = useContext(OrderContext)
  console.log(data)
  const artArray = data.art.nodes.map((node)=> {
    return (
      <div>
        <p>{node.title}</p>
        <Link to={node.slug.current}>{node.title}</Link>
        <button onClick={()=> setOrder([ ...order, node ])}>Add to Cart</button>
        <Img fluid={node.wallArtImg.asset.fluid} alt={node.title} />
      </div>
  )})
  return ( 
     <div> 
       <p>CartCount: {order.length}</p>
       <ArtGrid>
         {artArray}
       </ArtGrid>
     </div> 
  ) 
} 

export const query = graphql`
  query AllArt {
    art: allSanityWallArt {
      nodes {
        title
        slug {
          current
        }
        credit
        category{
          title
          description
        }
        wallArtImg {
          asset {
            fluid(maxWidth:200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default WallArt;
