import React, { useState, useEffect, ReactNode } from 'react';

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
    <a
      onClick={() => setIsActive(!isActive)}
      className={
        isActive
          ? 'bg-blue-200 text-blue-700 px-4 py-2 text-lg font-medium  rounded'
          : 'hover:bg-blue-200 text-gray-900 px-4 py-2 text-lg font-medium  rounded'
      }
      href={url}
    >
      {text}
    </a>
  );
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <>
      <div className="flex items-center m-auto max-w-screen-xl p-4">
        <NavButton url="/" text="Home" />
        <NavButton url="/about" text="About" />
        <NavButton url="/product" text="Product" />
        <a className="ml-auto" href="/login">
          <button
            type="button"
            className="inline-flex shadow-lg px-8 py-2 border border-transparent text-base font-medium rounded text-blue-700 bg-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </a>
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
