import React from 'react';
import { format, parseISO } from 'date-fns';

const Members = ({ members, handleSetEditModalProps }) => {
  return (
    <>
      <tbody>
        {!members && <h1 className="text-4xl">'Loading...'</h1>}
        {members.map(member => (
          <tr className="bg-white border-b border-chakra200">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a
                // href={`/api/members/${member.id}`}
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
                onClick={() => handleSetEditModalProps(member)}
              >
                {member.name}
              </a>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-chakra500">
              {member.number}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-chakra500">
              {format(parseISO(member.date), 'PP')}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Members;
