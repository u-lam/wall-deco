import React from 'react';
import { OrderProvider } from './src/components/OrderContext'
import { Helmet } from 'react-helmet'
//this should look pretty similar to gatsby-browser page

export const wrapRootElement = ({ element }) => {
  return (
    <OrderProvider>
      <Helmet>
        <title>WDArt</title>
        <meta name="description" content="High end wall art. The best photography on your wall." />
      </Helmet>
      {element}
    </OrderProvider>
  )
}
