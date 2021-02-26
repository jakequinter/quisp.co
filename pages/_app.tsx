import type { AppProps /*, AppContext */ } from 'next/app';
import '~/styles/global.css';

import { AuthProvider } from '~/lib/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
