import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/product/productListSlice';
export const store = configureStore({
  reducer: {
    products: productListReducer
  },
});
