import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #f4a15d;
  text-decoration: none;
  margin: 0 1.2rem;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    /* adds a line transition upon hover */
    content: ".";
    color: transparent;
    /* background: #000; */
    background: #fff;
    height: 1px;
    transition: all 0.3s ease-in;
  }

  :hover {
    /* color: #000; */
    color: #fff;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1rem;
    z-index: 6;
  }
`;
