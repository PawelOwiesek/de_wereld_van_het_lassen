import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
  background-color: #1f47a8;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 8px;

  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;
