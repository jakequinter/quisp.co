import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';

import { useAuth } from '@/lib/auth';

interface ShellProps {
  children: ReactNode;
}

interface NavButtonProps {
  url: string;
  text: string;
}

const NavButton = ({ url, text }: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (window.location.pathname === url) setIsActive(true);
  }, []);

  return (
    <Link href={url}>
      <a
        onClick={() => setIsActive(!isActive)}
        className={
          isActive
            ? 'bg-blue-200 text-blue-500 mx-4 px-4 py-2 text-lg font-medium  rounded'
            : 'hover:text-blue-500 text-gray-900 mx-4 px-4 py-2 text-lg font-medium  rounded'
        }
      >
        {text}
      </a>
    </Link>
  );
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const auth = useAuth();

  const guestLinks = (
    <div className="md:inline-flex md:flex-row w-full text-center flex flex-col md:h-auto justify-between ">
      <NavButton url="/" text="Home" />
      <NavButton url="/about" text="About" />
      <NavButton url="/product" text="Product" />
      <NavButton url="/faq" text="FAQ" />
      <Link href="/login">
        <button
          type="button"
          className="inline-flex ml-auto shadow-lg px-8 py-2 border border-transparent text-base font-medium rounded text-blue-500 bg-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </Link>
    </div>
  );

  const authLinks = (
    <div className="md:inline-flex md:flex-row w-full text-center flex flex-col md:h-auto justify-between max-w-6xl mx-auto">
      <NavButton url="/" text="Home" />
      <NavButton url="/members" text="Members" />
      <NavButton url="/employees" text="Employees" />
      <NavButton url="/learn" text="Learn" />
      <button
        type="button"
        className="inline-flex ml-auto shadow-lg px-8 py-2 border border-transparent text-base font-medium rounded text-blue-500 bg-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => auth.signout()}
      >
        Logout
      </button>
    </div>
  );

  return (
    <>
      <nav className="sticky-nav flex items-center justify-between w-full bg-white border-b flex-wrap p-3">
        {!auth.user && guestLinks}
        {auth.user && authLinks}
      </nav>

      <div
        className="flex-col max-w-screen-xl m-auto justify-content my-24 px-4"
        // style={{ minHeight: 'Calc(100vh - 87px)' }}
      >
        {children}
      </div>
    </>
  );
};

export default Shell;
