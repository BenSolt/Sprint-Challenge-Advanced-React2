import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Strike button is rendering', () => {
  const container = rtl.render(<NavbarSlider />)
  console.log(container);
})

test('contains womans', () => {
  const { getByText } = rtl.render(<App />);
  getByText(/womans/i);
});

test('contains world cup', () => {
  const { getByText } = rtl.render(<App />);
  getByText(/world cup/i);
});

test('contains searched', async () => {
  const { findByText } = await rtl.render(<App />);
  findByText(/searched/i);
});