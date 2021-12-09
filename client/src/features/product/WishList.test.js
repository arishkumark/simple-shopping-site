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
import WishList from './WishList';


describe('Cart renders properly', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <WishList />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  })

  it('Shows empty message', () => {
    const msg = screen.getByText(/Hier ist richtig viel Platz für deine Wohnideen./i);
    expect(msg).toBeInTheDocument();
  });
});
