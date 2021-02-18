import { ReactNode } from 'react';

interface DashboardShellProps {
  children: ReactNode;
}

const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  return (
    <div className="bg-chakra200">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default DashboardShell;
