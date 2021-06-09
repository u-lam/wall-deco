import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "../components/OrderContext";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import getStripe from '../utils/stripejs'


const CartHeader = styled.h1`
  text-align: center;
  font-family: philosopher;
  font-size: 3rem;
`

const Container = styled.div`
  width: 100vw;
  min-height: 70vh;
  padding: 20px 30px 20px 30px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  grid-gap: 20px;
  align-items: center;
  overflow: scroll;
`;

const ArtCard = styled.div`
  border: 1px solid lightgray;
  height: 300px;
  padding: 20px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const query = graphql`
  query {
  allStripePrice {
    edges {
      node {
        id,
        product {
          id
          object
          name
        }
        unit_amount,
        unit_amount_decimal,
        currency
      }
    }
  }
}
`;


const Cart = ({data}) => {
  const [order, setOrder] = useContext(OrderContext);
  const [stripeConfiguredOrder, setStripeConfiguredOrder] = useState([])
  const [artArray, setArtArray] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // use a little function to make stripeConfiguredOrder from order and graphql data
    if (order.length > 1 && data) {
      // grab just the names of the items and put in array
      let names = order.map((obj)=> obj.title)
      // if the product.name is is in names, then put in 'inCart'
      let inCart = data.allStripePrice.edges.filter((obj) => {
        if (names.indexOf(obj.node.product.name) !== -1) {
          return true
        } else {
          return false
        }
      })
      console.log('in cart', inCart)
      setStripeConfiguredOrder(inCart.map((item)=> ({price: item.node.id, quantity: 1 })))
    }
  }, [order])

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      // need to pull in id's and match them with quantity and items from cart - use name to match
      // hard coded one
      lineItems: [ ...stripeConfiguredOrder],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }
  console.log(order)

  useEffect(()=> {
    const tempArtArray = order.map(node => {
      let artist = node.credit.split(" ");
      return (
        <ArtCard>
          <Img
            fluid={node.wallArtImg.asset.fluid}
            alt={node.title}
            style={{
              border: "2px solid gray",
              borderRadius: 15,
              height: 100,
              width: 100,
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
          <Button onClick={() => {
            let tempOrder = [...order]
            console.log(tempOrder)
            let filteredOrders = tempOrder.filter(item=> {
              return item.title != node.title
            })
            console.log(filteredOrders)
            setOrder(filteredOrders)
          }}>Remove</Button>
        </ArtCard>
      );
    });
    setArtArray(tempArtArray)
  }, [order])
  return (
    <Layout>
      <CartHeader>Checkout</CartHeader>
      <Container>{artArray}</Container>
      <button disabled={loading} onClick={redirectToCheckout}>
        Buy
      </button>
    </Layout>
  );
};


export default Cart;
