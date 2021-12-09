import { render, screen, waitForElement } from '@testing-library/react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import theme from '../../theme';
import ProductList from './ProductList';


describe('Product List component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<ProductList />} />
            </Routes>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  })

  it('Fetches product list thowrs error', async() => {
    const products = await waitForElement(() => screen.getByText(/Sorry! Please try again after some time/i));
    expect(products).toBeInTheDocument();
  });
});
