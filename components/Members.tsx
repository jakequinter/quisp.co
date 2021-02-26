import { useState } from 'react';
import { format, parseISO } from 'date-fns';

interface MembersProps {
  members: [
    {
      name: string;
      number: number;
      date: string;
    }
  ];
  currentPage: number;
  membersPerPage: number;
  filter: string;
  handleSetEditModalProps: (member: object) => void;
}

const Members = ({
  members,
  currentPage,
  membersPerPage,
  filter,
  handleSetEditModalProps
}: MembersProps) => {
  return (
    <>
      <tbody>
        {!members && <h1 className="text-4xl">'Loading...'</h1>}
        {/* {members.map(member => (
          <tr className="bg-white border-b border-chakra200">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a
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
        ))} */}
        {members
          .filter(filteredMembers =>
            filteredMembers.name
              .toLocaleLowerCase()
              .includes(filter.toLowerCase())
          )
          .slice(
            currentPage * membersPerPage,
            currentPage * membersPerPage + membersPerPage
          )
          .map(member => (
            <tr className="bg-white border-b border-chakra200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a
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
