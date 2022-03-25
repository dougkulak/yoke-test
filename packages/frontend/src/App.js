import React from 'react';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import DefaultLayout from './layouts/Default';
import Products from './pages/Products';

const queryClient = new QueryClient();

const appTheme = extendTheme({
  fonts: {
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, serif',
    mono: 'Menlo, monospace',
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={appTheme}>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
