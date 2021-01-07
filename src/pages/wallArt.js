import React, {useState, useEffect, useContext} from 'react'; 
import {OrderContext} from '../components/OrderContext'
 
const WallArt = ()=> { 
  const [order, setOrder] = useContext(OrderContext)
  return ( 
     <div> 
       <p>CartCount: {order.length}</p>
       <button onClick={()=>setOrder( [ ...order, 'newArt'])}>
         Add to order
       </button>
     </div> 
  ) 
} 
export default WallArt;
