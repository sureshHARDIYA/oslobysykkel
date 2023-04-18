import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./containers/Home";
import ErrorBoundary from "./components/ErrorBoundry";

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
