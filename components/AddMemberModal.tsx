import React, { useState } from 'react';

const AddMemberModal = ({ closeModal }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              AddNew Member
            </h3>
            <div className="mt-2">
              <p className="text-sm">
                To add a new member, please enter in the name and sign in number
              </p>
            </div>
          </div>
          <div className="pt-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                className="shadow-sm focus:ring-indigo-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                // ref={register({
                //   required: 'Required'
                // })}
              />
            </div>
          </div>
          ƒ
          <div className="pt-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Sign in number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                className="shadow-sm focus:ring-indigo-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                // ref={register({
                //   required: 'Required'
                // })}
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 sm:col-start-1 sm:text-sm"
            >
              Add
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:col-start-2 sm:text-sm"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
