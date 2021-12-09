import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import theme from '../../theme';
import Cart from './Cart';


describe('Cart renders properly', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Cart />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  })

  it('Shows empty message', () => {
    const msg = screen.getByText(/Dein Warenkorb ist leer/i);
    expect(msg).toBeInTheDocument();
  });
});
