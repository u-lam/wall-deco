import React, { useState, createContext } from 'react'; 
 
const OrderContext = createContext();

const OrderProvider = (props)=> { 
  const [order, setOrder] = useState([])
  return ( 
    <OrderContext.Provider value={[order, setOrder]}>
      {props.children}
    </OrderContext.Provider> 
  ) 
} 
export  { OrderProvider, OrderContext }
