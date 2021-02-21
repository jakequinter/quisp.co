import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

import Shell from '@/components/Container';
import { useAuth } from '@/lib/auth';
import { Router } from 'next/router';

const login = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleLogin = () => {
    auth.signinWithGoogle();
  };

  if (auth.user) {
    router.push('/dashboard');
  }

  return (
    <Shell>
      <Head>
        <title>Sign in</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('quisp-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
      </Head>
      <div className="flex justify-center">
        <div className="flex-col">
          <h1 className="text-4xl pb-2 font-bold">Sign in to your account</h1>
          <p className="text-center">
            Don't have an account?{' '}
            <span className="text-blue-500">
              <Link href="/sign-up">
                <a>Sign up</a>
              </Link>
            </span>
          </p>
          <button
            type="button"
            className="flex justify-center items-center w-full mt-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white border-gray-200 hover:border-gray-300"
            onClick={handleLogin}
          >
            <FcGoogle className="mr-4" size={20} /> Sign in with Google
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

export default login;
