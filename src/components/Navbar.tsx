// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyTown
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <XMarkIcon className="h-6 w-6 text-blue-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
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
  <Link href={href} className="text-gray-800 hover:text-blue-600">
    {children}
  </Link>
);

export default Navbar;
