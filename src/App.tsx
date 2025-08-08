import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import type { AxiosError } from 'axios';
import 'ldrs/react/Bouncy.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const err = error as AxiosError;

        // Disable retry for all 4xx client errors
        const status = err.response?.status;
        console.log(status);
        if (status && status >= 400 && status < 500) {
          return false;
        }

        // Allow up to 3 retries for 5xx or network issues
        return failureCount < 3;
      }
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
