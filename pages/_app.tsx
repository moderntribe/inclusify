import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReakitProvider } from 'reakit';

import '@styles/index.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReakitProvider>
        <Component {...pageProps} />
      </ReakitProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
