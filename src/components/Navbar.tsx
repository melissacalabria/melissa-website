// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Hero.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-2xl font-bold text-primary">MyTown</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation"
            className="focus:outline-none"
          >
            {navOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden bg-background shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
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
    className="text-foreground hover:text-primary transition-colors duration-300"
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
    className="text-foreground hover:text-primary transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
