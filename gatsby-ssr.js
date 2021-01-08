import React from 'react';
import { OrderProvider } from './src/components/OrderContext'
//this should look pretty similar to gatsby-browser page

export const wrapRootElement = ({ element }) => {
  return (
    <OrderProvider>
      {element}
    </OrderProvider>
  )
}
