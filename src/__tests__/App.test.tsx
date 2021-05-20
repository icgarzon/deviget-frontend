import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/';


const originalWarn = console.warn.bind(console.warn);

beforeAll(() => {
  console.warn = (msg) => 
    !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg)
});

afterAll(() => {
  console.warn = originalWarn
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});