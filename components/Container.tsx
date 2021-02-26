import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';

import { useAuth } from '~/lib/auth';

interface ContainerProps {
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
      <a className="text-gray-600 hover:text-gray-800 mx-4">{text}</a>
    </Link>
  );
};

const Shell: React.FC<ContainerProps> = ({ children }) => {
  const auth = useAuth();

  const guestLinks = (
    <>
      <div className="flex justify-between py-4 max-w-6xl mx-auto">
        <NavButton url="/" text="Quisp" />
        <div>
          <NavButton url="/about" text="About" />
          <NavButton url="/faq" text="FAQ" />
          <NavButton url="/login" text="Sign in" />
        </div>
      </div>
    </>
  );

  const authLinks = (
    <div className="flex justify-between py-4 max-w-6xl mx-auto">
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
      <div>
        {!auth.user && guestLinks}
        {auth.user && authLinks}
      </div>

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
