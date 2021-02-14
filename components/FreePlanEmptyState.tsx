import React, { useState } from 'react';

import Shell from '@/components/Container';
import AddMemberModal from './AddMemberModal';
import { useAuth } from '@/lib/auth';

const FreePlanEmptyState = () => {
  const auth = useAuth();
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h1 className="text-4xl pb-2 text-gray-900 font-bold text-center">
        {auth.user ? `${auth.user.name}'s Members` : null}
      </h1>
      <div className="flex justify-center text-center max-w-screen-md mx-auto bg-white rounder-lg p-8 mt-16">
        <div className="flex-col w-2/3">
          <h3 className="text-2xl text-gray-900 font-medium pb-4">
            👋🏻 Welcome to Quisp!
          </h3>
          <p className="pb-8">
            Getting started is easy. Lets get started by adding your first
            member by clicking the button below.
          </p>
          <button
            type="button"
            className="inline-flex ml-auto shadow-lg px-8 py-2 border border-transparent text-base font-medium rounded text-white bg-blue-500 transform hover:bg-blue-600"
            onClick={() => setIsShow(true)}
          >
            Add your first member
          </button>
        </div>
        {isShow ? <AddMemberModal closeModal={() => setIsShow(false)} /> : null}
      </div>
    </>
  );
};

export default FreePlanEmptyState;
