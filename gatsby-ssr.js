import React from 'react';
import { OrderProvider } from './src/components/OrderContext'
import { Helmet } from 'react-helmet'
//this should look pretty similar to gatsby-browser page

export const wrapRootElement = ({ element }) => {
  return (
    <OrderProvider>
      <Helmet title="WDArt" defer={false} />
      {element}
    </OrderProvider>
  )
}
