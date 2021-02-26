import React from 'react';

const SearchBar = ({ handleChange }) => {
  return (
    <div className="flex-1 justify-center xs:mr-4">
      <div className="max-w-lg w-80">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-chakra400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-chakra700 placeholder-chakra400 focus:border-chakra300 focus:ring-white sm:text-sm"
            placeholder="Search"
            type="search"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
