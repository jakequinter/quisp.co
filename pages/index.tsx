import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs';
import { FaRegIdCard } from 'react-icons/fa';
import { FiExternalLink, FiMonitor } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <div
        className="mb-48"
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #D1D5DB 44.79%, rgba(255, 255, 255, 0) 100%), rgba(75, 85, 99, 0.3)'
        }}
      >
        <nav className="flex justify-between py-4 max-w-6xl mx-auto text-gray-600 font-medium">
          <a href="/">Quisp</a>
          <div>
            <a className="px-4" href="/about">
              About
            </a>
            <a className="px-4" href="/faq">
              FAQ
            </a>
            <a className="px-4" href="/login">
              Sign in
            </a>
          </div>
        </nav>
        <div className="text-center py-36">
          <h1 className="text-4xl w-1/4 mx-auto pb-8">
            Sign-in software designed for{' '}
            <span className="text-indigo-500">your business</span>
          </h1>
          <p className="text-xl w-1/4 mx-auto font-medium pb-16">
            Throw out the paper and start managing your members like it's the
            21st century
          </p>
          <button
            type="button"
            className="inline-flex items-center px-12 py-4 font-medium rounded-md shadow-sm text-indigo-900 bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600"
          >
            Get started for free
          </button>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto">
        <div className="grid gap-60 sm:grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h5 className="text-3xl pb-4">Store members electronically</h5>
            <p>
              Throw out the three-ring binders and delete those Excel
              spreadsheets. Keep track of all your members electronically,
              centrally stored in one easy to navigate space.
            </p>
          </div>
          <div className="ml-auto">
            <Image
              className="rounded-xl"
              src="/features/whatwesolve.png"
              width={500}
              height={500}
            />
          </div>
          <div className="ml-auto">
            <Image
              className="rounded-xl"
              src="/features/whatwesolve.png"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h5 className="text-3xl pb-4">Monitor and manage</h5>
            <p>
              Look, mistakes happen. Easily verify your member data is
              up-to-date and accurate. No more duplicate entries or ineligible
              signatures.
            </p>
          </div>
          <div>
            <h5 className="text-3xl pb-4">Throw out the paper</h5>
            <p>
              Throw out the three-ring binders and delete those Excel
              spreadsheets. Keep track of all your members electronically,
              centrally stored in one easy to navigate space.
            </p>
          </div>
          <div className="ml-auto">
            <Image
              className="rounded-xl"
              src="/features/whatwesolve.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
