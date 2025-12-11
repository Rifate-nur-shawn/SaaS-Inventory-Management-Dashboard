import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './lib/queryClient'; // Import the engine you made
import { AppRoutes } from './routes/AppRoutes';  // Import the traffic controller

function App() {
  return (
    // 1. DATA LAYER (React Query)
    <QueryClientProvider client={queryClient}>
      
      {/* 2. ROUTING LAYER */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      
      {/* DEV TOOLS (Only shows in development, lifesaving for debugging) */}
      <ReactQueryDevtools initialIsOpen={false} />
      
    </QueryClientProvider>
  );
}

export default App;