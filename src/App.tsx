import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import Theme from './theme/Theme';
import './App.css';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
