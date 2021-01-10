import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs';
import { FaRegIdCard } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';

import Shell from '../components/Shell';

export default function Home() {
  return (
    <Shell>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-6xl pb-4 text-gray-900">
            Sign-in software designed for{' '}
            <span className="text-blue-500">your business</span>
          </h1>
          <p className="text-2xl pb-8">
            Ditch the outdated three-ring binder approach. Remove the hassle of
            decades of paper with a single platform
          </p>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 mr-2 border border-transparent font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get started
          </button>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 ml-2 border border-transparent font-medium rounded text-blue-700 bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            More about us
          </button>
        </div>
        <video
          style={{
            width: '100%',
            outline: 'none',
            borderRadius: 5
          }}
          controls
        >
          <source src="./productDemo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-24">
        <h3 className="text-4xl text-gray-900 font-medium text-center">
          How it works
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="bg-gradient-to-r from-white to-blue-100 px-12 py-8 shadow-md text-center rounded-lg">
            <BsPersonPlus className="mx-auto mb-4 text-blue-500" size={75} />
            <h3 className="text-xl font-bold text-gray-900 pb-2">
              Add employees
            </h3>
            <p className="font-medium">
              Add your employees and give them diffferent access.
            </p>
          </div>
          <div className="bg-blue-100 px-12 py-8 shadow-md text-center rounded-lg">
            <FiMonitor className="mx-auto mb-4 text-blue-500" size={75} />
            <h3 className="text-xl font-bold text-gray-900 pb-2">
              Add members
            </h3>
            <p className="font-medium">
              Your employees add and update members to the sign in
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white px-12 py-8 shadow-md text-center rounded-lg">
            <FaRegIdCard className="mx-auto mb-4 text-blue-500" size={75} />
            <h3 className="text-xl font-bold text-gray-900 pb-2">Manage</h3>
            <p className="font-medium">
              Prevent common human errors like duplicate entries or numbers
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-4xl text-gray-900 font-medium text-center">
          What we solve
        </h3>
        <p className="text-xl pt-8">
          I worked in the bar/restaurant industry for many years. If you’re from
          Wisconsin, I’m sure you’re familiar with the “sign in” that many local
          bars probably have. What I’ve experienced with the current process is
          nothing short of a struggle. Quisp was created to become the
          easy-to-use software that uncomplicates the process of how bars and
          restaurants store and mangage their members data.
        </p>
      </div>
      {/* <div className="flex justify-center mt-24">
        <Image src="/teamwork.png" height={750} width={750} />
      </div> */}
      <div className="mt-24">
        <h3 className="text-4xl text-gray-900 font-medium text-center pb-8">
          Features
        </h3>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2">
            <Image src="/teamwork.png" height={500} width={500} />
          </div>
          <div>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
          </div>
          <div>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
            <Image src="/teamwork.png" height={50} width={50} />
            <h5 className="text-xl font-bold text-gray-900">
              Simple interface
            </h5>
            <p>
              Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you.{' '}
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
