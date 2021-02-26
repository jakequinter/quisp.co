import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import Container from '~/components/Container';

const faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
          <h3 className="text-indigo-500 font-bold">FAQ</h3>
          <h1 className="text-4xl pb-2 font-bold">
            Frequently asked questions
          </h1>
        </div>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          <div className="pt-6">
            <dt className="text-lg">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span className="font-medium text-gray-900">
                  What&#039;s the best thing about Switzerland?
                </span>
                {isOpen ? (
                  <span className="ml-6 h-7 flex items-center">
                    <FiChevronUp />
                  </span>
                ) : (
                  <FiChevronDown />
                )}
              </button>
            </dt>
            {isOpen ? (
              <dd className="mt-2 pr-12">
                <p className="text-base text-gray-500">
                  I don&#039;t know, but the flag is a big plus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            ) : null}
          </div>
        </dl>
      </div>
    </Container>
  );
};

export default faq;
