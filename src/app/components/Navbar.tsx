import React from 'react';
import { useNavbarHeight } from './NavbarContext';

const Navbar = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <nav id="navbar" style={{ height: navbarHeight }}>
      <div className="navbar-section primary">
        echoes
      </div>
      <div className="navbar-section secondary">
        melissa
      </div>
    </nav>
  );
};

export default Navbar;