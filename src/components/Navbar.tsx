// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/melissa_logo.png" // Ensure this path is correct
            alt="Melissa Logo"
            width={60}
            height={60}
            className="h-17 w-17 rounded-full"
          />
          <span className="text-3xl font-bold text-primary">
            ECHOES Melissa
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/gallery">Gallery</NavLink> {/* Added Gallery link */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={navOpen}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            {navOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/recipes">Recipes</MobileNavLink>
            <MobileNavLink href="/gallery">Gallery</MobileNavLink> {/* Added Gallery link */}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-800 hover:text-primary transition-colors duration-300 flex items-center"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-800 hover:text-primary transition-colors duration-300 flex items-center"
    onClick={() => {
      // Optional: Close the mobile menu when a link is clicked
      // This requires lifting the state up or using a context
    }}
  >
    {children}
  </Link>
);

export default Navbar;
