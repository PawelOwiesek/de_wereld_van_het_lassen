import { NavBar, NavItem } from "./styled";

const Navbar = () => {
  return (
    <NavBar>
      <NavItem to="/">Main Page</NavItem>
      <NavItem to="/migMag">Lassen MIG/MAG</NavItem>
      <NavItem to="/Constructiestaal">Constructiestaal</NavItem>
    </NavBar>
  );
};

export default Navbar;
