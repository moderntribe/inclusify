import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function withQueryClient( Component ) {
	return function ( props ) {
		return (
			<QueryClientProvider client={ queryClient }>
				<Component {...props} />
			</QueryClientProvider>
		);
	};
}
