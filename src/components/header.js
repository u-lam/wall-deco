import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Div = styled("div")`
  border: 1px solid red;
  padding: 0 1rem;
  margin: 0.5rem auto;
  width: 90vw;
  display: inline-block;
`;

const Header = styled("header")`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const List = styled("ul")`
  /* list-style: none;
  float: right; */
`;

const ListItem = styled("li")`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.1rem;
`;

const Nav = () => (
  <Div>
    <Header>
      <Link to='/'>
        <h3>Icon Here</h3>
      </Link>

      <List>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/about/'>About</Link>
        </ListItem>
        <ListItem>
          <Link to='/contact/'>Contact</Link>
        </ListItem>
        <ListItem>
          <Link to='/shop/'>Shop</Link>
        </ListItem>
        <ListItem>
          <Link to='/cart/'>Cart</Link>
        </ListItem>
      </List>
    </Header>
  </Div>
);

export default Nav;
