import type { AppProps } from 'next/app';

import { withQueryClient } from '@hooks';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withQueryClient(MyApp);
