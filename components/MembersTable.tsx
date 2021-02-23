import { useState, useEffect } from 'react';
import useSWR from 'swr';

import Pagination from '../components/Pagination.js';
import TableSkeleton from './TableSkeleton';
import Members from '../components/Members';
import fetcher from '../utils/fetcher';
import { useAuth } from '../lib/auth';

const MembersTable = ({ setIsOpen, setMember }) => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/members', user.token] : null, fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const [MembersPerPage] = useState(10);

  // get current page of members
  const indexOfLastPost = currentPage * MembersPerPage;
  const indexOfFirstPost = indexOfLastPost - MembersPerPage;

  // if (!data)
  //   return (
  //     <div className="flex justify-center">
  //       <h1 className="text-4xl">'Loading...'</h1>
  //     </div>
  //   );

  const handleSetEditModalProps = member => {
    setIsOpen(true);
    setMember({
      id: member.id,
      name: member.name,
      number: member.number
    });
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-chakra200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-chakra50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-chakra uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-chakra uppercase tracking-wider"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-chakra uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              {!data ? (
                <TableSkeleton />
              ) : (
                <Members
                  members={data.members.slice(
                    indexOfFirstPost,
                    indexOfLastPost
                  )}
                  handleSetEditModalProps={handleSetEditModalProps}
                />
              )}
            </table>
          </div>
          <div className="flex justify-end pt-4">
            {data ? (
              <Pagination
                membersPerPage={MembersPerPage}
                totalPosts={data.members.length}
                next={() => setCurrentPage(currentPage + 1)}
                previous={() => setCurrentPage(currentPage - 1)}
                currentPage={currentPage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
