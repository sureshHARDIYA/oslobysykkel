import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Home from './containers/Home';
import ErrorBoundary from './components/ErrorBoundry';

import 'antd/dist/reset.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Home />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
