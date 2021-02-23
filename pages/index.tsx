import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

import { useAuth } from '../lib/auth';

interface HowItWorksFeatureProps {
  imgSrc: string;
  title: string;
  text: string;
}

interface FeatureProps {
  imgSrc: string;
  title: string;
  text: string;
}

const HowItWorksFeature = ({ imgSrc, title, text }: HowItWorksFeatureProps) => (
  <div className="flex-col justify-center text-center px-12 py-8">
    <div className="flex justify-center pb-4">
      <Image src={imgSrc} height={50} width={50} />
    </div>
    <h3 className="text-xl font-bold pb-2">{title}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

const Feature = ({ imgSrc, title, text }: FeatureProps) => (
  <div className="pr-8 h-64">
    <Image src={imgSrc} height={50} width={50} />
    <h5 className="text-xl pt-4 font-bold text-gray-900">{title}</h5>
    <p>{text}</p>
  </div>
);

export default function Home() {
  const auth = useAuth();

  return (
    <>
      {/* Jumbotron section */}
      <div
        style={{
          background:
            'linear-gradient(180deg, #F7FAFC 44.98%, rgba(255, 255, 255, 0) 100%), rgba(55, 65, 81, 0.3)'
          // 'linear-gradient(180deg, #FFFFFF 57.81%, rgba(255, 255, 255, 0) 100%), rgba(156, 163, 175, 0.3)'
        }}
      >
        <nav className="flex justify-between py-4 max-w-6xl mx-auto text-gray-600">
          <Link href="/">
            <a className="mx-4">Quisp</a>
          </Link>
          <div>
            <Link href="/about">
              <a className="mx-4 hover:text-gray-800">About</a>
            </Link>
            <Link href="faq">
              <a className="mx-4 hover:text-gray-800" href="/faq">
                FAQ
              </a>
            </Link>
            {!auth.user ? (
              <Link href="/login">
                <a className="mx-4 hover:text-gray-800">Sign in</a>
              </Link>
            ) : (
              <Link href="/dashboard">
                <a className="mx-4 text-gray-800 bg-gray-300 p-1 rounded-md">
                  Dashboard
                </a>
              </Link>
            )}
          </div>
        </nav>
        <div className="text-center py-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mx-auto">
            <span className="block">Sign-in software designed for</span>
            <span className="text-indigo-500">your business</span>
          </h1>
          <h2 className="text-base md:text-xl text-gray-500 mx-auto font-medium mt-8 mb-16">
            <span className="block">
              Throw out the paper and start managing your
            </span>
            <span>members like it's the</span>
            21st century.
          </h2>
          <Link href={!auth.user ? '/login' : '/dashboard'}>
            <button
              type="button"
              className="inline-flex items-center px-12 py-4 font-medium rounded-md shadow-sm text-indigo-900 bg-gradient-to-r from-indigo-300 to-indigo-400 hover:from-indigo-400 hover:to-indigo500 focus:outline-none focus:ring-2  focus:ring-indigo-500"
            >
              {!auth.user ? 'Get started for free' : 'Go to dashboard'}
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 my-24 md:my-32">
        <section className="md:flex items-center flex-row mx-auto mb-24 md:mb-32">
          <div className="flex-1 flex flex-col mb-8 px-0 mr-0 md:mr-32">
            <h5 className="text-3xl pb-4">Store members electronically</h5>
            <p>
              Throw out the three-ring binders and delete those Excel
              spreadsheets. Keep track of all your members electronically,
              centrally stored in one easy to navigate space.
            </p>
          </div>
          <div className="flex-1 pt-4 md:pt-0">
            <div className="bg-indigo-200 p-4 rounded">
              <img
                className="rounded-xl w-full h-auto"
                src="/dashboard.svg"
                // height={695}
                // width={501}
              />
            </div>
          </div>
        </section>
        <section className="md:flex items-center flex-row mx-auto mb-24 md:mb-32">
          <div className="flex-1 flex flex-col mb-8">
            <h5 className="text-3xl pb-4">Monitor and manage</h5>
            <p>
              Look, mistakes happen. Easily verify your member data is
              up-to-date and accurate. No more duplicate entries or ineligible
              signatures.
            </p>
          </div>
          <div className="flex-1 pt-4 md:pt-0 order-first px-0 mr-0 md:mr-32">
            <div className="bg-indigo-200 p-4 rounded">
              <img
                className="rounded-xl w-full h-auto"
                src="/addMember.svg"
                // height={695}
                // width={501}
              />
            </div>
          </div>
        </section>
        <section className="md:flex items-center flex-row mx-auto">
          <div className="flex-1 flex flex-col mb-8 px-0 mr-0 md:mr-32">
            <h5 className="text-3xl pb-4">Throw out the paper</h5>
            <p>
              Throw out the three-ring binders and delete those Excel
              spreadsheets. Keep track of all your members electronically,
              centrally stored in one easy to navigate space.
            </p>
          </div>
          <div className="flex-1 pt-4 md:mt-0">
            <img
              className="rounded-xl w-full h-auto"
              src="/features/whatwesolve.png"
            />
          </div>
        </section>
      </div>
      <div className="bg-gray-100 mb-48">
        <div className="max-w-6xl py-24 mx-auto">
          <h3 className="text-3xl text-center">How it works</h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <HowItWorksFeature
              imgSrc="/howitworks/signup.svg"
              title="Sign up"
              text="Create an account and start managing your members today"
            />
            <HowItWorksFeature
              imgSrc="/howitworks/addmembers.svg"
              title="Add members"
              text="Your employees add and update members to the sign in"
            />
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <HowItWorksFeature
                imgSrc="/howitworks/manage.svg"
                title="Manage"
                text="Prevent common human errors like duplicate entries or numbers"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="max-w-6xl mx-auto mb-48 px-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center">
          <div className="col-span-2 mr-0 md:mr-16">
            <h3 className="text-3xl pb-4">Features</h3>
            <p>Avoid the common problems when using paper or Excel systems.</p>
            <div className="border-l-4 border-indigo-500 pl-8 mt-8">
              <h5 className="text-lg text-indigo-700 pb-2">
                Find out more now
              </h5>
              <p className="text-gray-900 pb-8">
                With all paper and other software systems such as Excel, they
                come with their problems.
              </p>
              <Link href="/about/sign-in-overview">
                <button
                  type="button"
                  className="inline-flex items-center px-8 py-3 font-medium rounded-md shadow-sm text-indigo-900 bg-gradient-to-r from-indigo-300 to-indigo-400 hover:from-indigo-400 hover:to-indigo500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign-in problems{' '}
                  <span className="pl-4">
                    <FiArrowRight size={20} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-32 md:mt-0">
            <Feature
              imgSrc="/features/simpleinterface.svg"
              title="Simple interface"
              text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
            />

            <Feature
              imgSrc="/features/authorization.svg"
              title="Authorization"
              text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
            />

            <div>
              <Feature
                imgSrc="/features/findmembers.svg"
                title="Easily find members"
                text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
              />
            </div>
          </div>
          <div className="mt-32 md:mt-0">
            <Feature
              imgSrc="/features/fastdashboard.svg"
              title="Fast dashboard"
              text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
            />

            <Feature
              imgSrc="/features/nopaper.svg"
              title="No more paper"
              text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
            />

            <div>
              <Feature
                imgSrc="/features/247support.svg"
                title="24/7 Support"
                text="Do yourself a favor and throw away all of those three-ring binders and stacks of ineligible paper."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
