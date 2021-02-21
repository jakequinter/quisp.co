import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

import { useAuth } from '@/lib/auth';

import Shell from '@/components/Container';

const SignUp = () => {
  const auth = useAuth();

  return (
    <Shell>
      <div className="flex justify-center">
        <div className="flex-col w-1/3">
          <h1 className="text-4xl pb-2 text-gray-900 font-bold text-center">
            Create your account
          </h1>
          <p className="text-center">
            Already have an account?{' '}
            <span className="text-blue-500">
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </span>
          </p>
          <button
            type="button"
            className="flex justify-center items-center w-full mt-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white border-gray-200 hover:border-gray-300"
            onClick={() => auth.signinWithGoogle()}
          >
            <FcGoogle className="mr-4" size={20} /> Sign up with Google
          </button>
          <div className="flex my-8 items-center">
            <hr className="w-1/3" />
            <p className="px-1">Or continue with</p>
            <hr className="w-1/3" />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
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
          <div className="pt-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Password
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
          <button
            type="button"
            className="flex justify-center items-center w-full mt-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600"
          >
            Sign in
          </button>
        </div>
      </div>
    </Shell>
  );
};

export default SignUp;
