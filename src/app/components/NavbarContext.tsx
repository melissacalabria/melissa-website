import React, { createContext, useContext, useState, useEffect } from 'react';

const NavbarContext = createContext(0);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  return (
    <NavbarContext.Provider value={navbarHeight}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarHeight = () => useContext(NavbarContext);