import type { AppProps } from 'next/app';

import { withQueryClient } from '@hooks';

import '@styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withQueryClient(MyApp);
