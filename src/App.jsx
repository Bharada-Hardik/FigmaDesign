import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Header from './Components/Header';


function App() {
  const queryClient = new QueryClient(); // Renamed variable
  

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
}

export default App;
