import React from 'react';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import DefaultLayout from './layouts/Default';
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
  );
}

export default App;
