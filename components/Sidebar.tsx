import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUsers } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdVerifiedUser } from 'react-icons/md';

import { useAuth } from '../lib/auth';

interface SidebarNavItemProps {
  href: string;
  icon: any;
  text: string;
}

const SidebarNavItem = ({ href, icon, text }: SidebarNavItemProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <Link href={href}>
      <a
        className={
          isActive
            ? `bg-chakra200 text-chakra700 group flex items-center px-2 py-2 text-sm font-medium rounded-md`
            : `text-chakra500 hover:bg-chakra200 group flex items-center px-2 py-2 text-sm font-medium rounded-md`
        }
      >
        <span className="mr-4">{icon}</span>
        {text}
      </a>
    </Link>
  );
};

const Sidebar = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col w-64">
      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 ">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <SidebarNavItem
              href="/dashboard"
              icon={<FaUsers />}
              text="Members"
            />
            <SidebarNavItem
              href="/employees"
              icon={<MdVerifiedUser />}
              text="Employees"
            />
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <nav className="flex-1 px-2 space-y-1">
                <a
                  href="/"
                  className="text-chakra500 hover:text-chakra600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  onClick={() => auth.signout()}
                >
                  <FiLogOut className="mr-4" size={18} />
                  Sign out
                </a>
              </nav>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
