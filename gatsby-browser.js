import React from 'react';
import { OrderProvider } from './src/components/OrderContext'
//this should look pretty similar to gatsby-browser page
import { Helmet } from 'react-helmet'

export const wrapRootElement = ({ element }) => {
  return (
    <OrderProvider>
      <Helmet title="WDArt" defer={false} />
      {element}
    </OrderProvider>
  )
}
