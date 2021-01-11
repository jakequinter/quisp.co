import Link from 'next/link';
import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs';
import { FaRegIdCard } from 'react-icons/fa';
import { FiExternalLink, FiMonitor } from 'react-icons/fi';

import Shell from '../components/Shell';
interface FeatureProps {
  imgSrc: string;
  imgHeight: number;
  imgWidth: number;
  title: string;
  text: string;
}

const Feature = ({
  imgSrc,
  imgHeight,
  imgWidth,
  title,
  text
}: FeatureProps) => (
  <div className="pb-16 pr-8">
    <Image src={imgSrc} height={imgHeight} width={imgWidth} />
    <h5 className="text-xl pt-4  font-bold text-gray-900">{title}</h5>
    <p>{text}</p>
  </div>
);

export default function Home() {
  return (
    <Shell>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-6xl pb-4 text-gray-900 font-bold">
            Sign-in software designed for{' '}
            <span className="text-blue-500">your business</span>
          </h1>
          <p className="text-xl md:text-2xl pb-8">
            Ditch the outdated three-ring binder approach. Remove the hassle of
            decades of paper with a single platform
          </p>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 mr-2 border border-transparent font-medium rounded text-blue-700 bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get started
          </button>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 ml-2 border border-gray-200 hover:border-gray-300 font-medium rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <h3 className="text-4xl text-gray-900 font-bold text-center">
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
        <h3 className="text-4xl text-gray-900 font-bold text-center pb-8">
          What we solve
        </h3>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xl pt-8 pr-0 md:pr-16">
              I worked in the bar/restaurant industry for many years. If you’re
              from Wisconsin, I’m sure you’re familiar with the “sign in” that
              many local bars probably have. What I’ve experienced with the
              current process is nothing short of a struggle. Quisp was created
              to become the easy-to-use software that uncomplicates the process
              of how bars and restaurants store and mangage their members data.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/about/sign-in-overview">
                <button
                  type="button"
                  className="inline-flex items-center my-8 px-6 py-3 mr-2 border border-transparent font-medium rounded text-blue-700 bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in overview <FiExternalLink className="ml-2" size={20} />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end ">
            <img
              className="rounded-xl"
              style={{ maxHeight: '400px' }}
              src="/features/whatwesolve.png"
              alt="self image"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-4xl text-gray-900 font-bold text-center pb-8">
          Features
        </h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex justify-center items-center lg:justify-start col-span-1 md:col-span-2">
            {/* <Image src="/features/teamwork.png" height={50} width={50} /> */}
            <img
              className="rounded-xl mb-8 "
              style={{ maxHeight: '500px' }}
              src="/features/teamwork.png"
              alt="self image"
            />
          </div>
          <div>
            <Feature
              imgSrc="/features/simpleinterface.png"
              imgHeight={50}
              imgWidth={100}
              title="Simple interface"
              text="Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you."
            />
            <Feature
              imgSrc="/features/easyauth.png"
              imgHeight={50}
              imgWidth={50}
              title="Easy authorization"
              text="Employee authorization to keep your member data secure and reliable. "
            />
            <Feature
              imgSrc="/features/findcustomers2.png"
              imgHeight={50}
              imgWidth={75}
              title="Simple interface"
              text="Quisp was designed with simplicity in mind. It's easy. You want to
              see your members, add new ones, and leave all the complicated
              dashboards elsewhere. We got you."
            />
          </div>
          <div>
            <Feature
              imgSrc="/features/nopaper.png"
              imgHeight={50}
              imgWidth={75}
              title="No more paper"
              text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
            />
            <Feature
              imgSrc="/features/findmembers.png"
              imgHeight={50}
              imgWidth={75}
              title="Easily find members"
              text="Stop scrolling through pages of notebook paper to try and locate a member. With Quisp, simply look them up in a matter of seconds. "
            />
            <Feature
              imgSrc="/features/247support.png"
              imgHeight={50}
              imgWidth={30}
              title="24/7 Support"
              text="Quisp is always available for questions, comments, or concerns. "
            />
          </div>
        </div>
      </div>
    </Shell>
  );
}
