import React from 'react';
import { format, parseISO } from 'date-fns';

const TableSkeleton = () => {
  const emptyStateArr = new Array(10);

  const EmptyRow = () => (
    <tr className="bg-white border-b border-chakra200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <span className="bg-chakra100 px-12 rounded"></span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-chakra500">
        <span className="bg-chakra100 px-4 rounded"></span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-chakra500">
        <span className="bg-chakra100 px-8 rounded"></span>
      </td>
    </tr>
  );
  return (
    <>
      {/* {!members && <h1 classNamteste="text-4xl">'Loading...'</h1>} */}
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
    </>
  );
};

export default TableSkeleton;
