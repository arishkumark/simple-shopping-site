import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  Routes,
  Route
} from "react-router-dom";
import theme from './theme';
import CustomAppBar from './common/CustomAppBar';
import NoRoute from './common/NoRoute';
import ProductList from './features/product/ProductList';
import ProductDetails from './features/product/ProductDetails';
import WishList from './features/product/WishList';
import Cart from './features/product/Cart';
import Success from './features/product/Success';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box data-testid="appContainer">
        <CustomAppBar />
        <Box sx={{ minHeight: '78vh'}}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishList" element={<WishList/>} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NoRoute />} />
          </Routes>
        </Box>
        <Box sx={{ textAlign: 'center', height: '50px', background: '#f5f5f5', borderTop: '1px solid #d9d9d9'}}>
          <Typography sx={{ paddingTop: '13px'}}>Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
