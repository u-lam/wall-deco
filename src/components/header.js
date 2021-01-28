import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <div>
    this is the Header page
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about/'>About</Link>
      <Link to='/contact/'>Contact</Link>
      <Link to='/shop/'>Shop</Link>
      <Link to='/cart/'>Cart</Link>
    </ul>
  </div>
);

export default Header;
