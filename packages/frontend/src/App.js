import React from 'react';
import {ChakraProvider, theme, extendTheme} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Default from './layouts/Default';
import Products from './pages/Products';

const appTheme = extendTheme({
  fonts: {
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, serif',
    mono: 'Menlo, monospace',
  },
});

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Default>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Default>
    </ChakraProvider>
  );
}

export default App;
