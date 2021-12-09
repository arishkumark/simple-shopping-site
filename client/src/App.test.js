import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders App correctly', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const mainContainer = screen.getByTestId('appContainer');
  expect(mainContainer).toBeInTheDocument();
});
