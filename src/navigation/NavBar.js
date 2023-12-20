import { NavBar, NavItem } from "./styles";

const Navbar = () => {
  return (
    <NavBar>
      <NavItem to="/">Main Page</NavItem>
      <NavItem to="/materials">Materials</NavItem>
    </NavBar>
  );
};

export default Navbar;
