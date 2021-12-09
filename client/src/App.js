import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  Routes,
  Route
} from "react-router-dom";
import theme from './theme';
import './App.css';
import CustomAppBar from './common/CustomAppBar';
import ProductList from './features/product/ProductList';
import ProductDetails from './features/product/ProductDetails';
import WishList from './features/product/WishList';
import Cart from './features/product/Cart';
import Success from './features/product/Success';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box data-testid="appContainer">
        <CustomAppBar />
        <Routes>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<WishList/>} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/success" element={<Success />} />
          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
