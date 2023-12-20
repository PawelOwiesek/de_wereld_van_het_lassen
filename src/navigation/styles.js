import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-around;
  padding: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 8px;

  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;
