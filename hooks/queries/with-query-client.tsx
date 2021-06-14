import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// TODO: Fix this TS mess
export function withQueryClient(Component: React.ReactElement): React.ReactElement {
  return function (props) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
      </QueryClientProvider>
    );
  };
}
