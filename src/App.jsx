import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Header from './Components/Header';
import Buying from './Components/Buying';



function App() {
  const queryClient = new QueryClient(); // Renamed variable
  

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
   
    // <Form/>
  );
}

export default App;
