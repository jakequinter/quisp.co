import { useState } from 'react';
import useSWR from 'swr';
import { format, parseISO } from 'date-fns';

import EditMemberModal from '../components/EditMemberModal';
import fetcher from '../utils/fetcher';
import { useAuth } from '../lib/auth';

const MembersTable = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/members', user.token] : null, fetcher);
  const [showEditMemberModal, setShowEditMemberModal] = useState(false);

  if (!data) return null;

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
              <tbody>
                {data.members &&
                  data.members.map(member => (
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href={`/api/members/${member.id}`}
                          className="text-blue-600 hover:text-blue-700 cursor-pointer"
                          // onClick={() => setShowEditMemberModal(true)}
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
