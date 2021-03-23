import React, {useState, useEffect, useContext} from 'react'; 
import Img from "gatsby-image"
import { graphql } from 'gatsby'


export const query =  graphql`
  query($slug: String!) {
    art: sanityWallArt(slug: {current: {eq: $slug}}) {
      title
      wallArtImg {
        asset {
          fluid(maxWidth:800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`


const SingleArt = ({ data, pageContext })=> { 
  const {art} = pageContext
  console.log(data)
  return ( 
     <div> 
      <h1>{art.title}</h1>
       <Img fluid={data.art.wallArtImg.asset.fluid}/>
     </div> 
  ) 
} 
export default SingleArt;
