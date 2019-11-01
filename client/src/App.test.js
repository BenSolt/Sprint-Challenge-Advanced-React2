import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavbarSlider from "./components/NavbarSlider";
import PlayerCard from "./components/PlayerCard";
import * as rtl from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('navbar slider', () => {
  const container = rtl.render(<NavbarSlider />)
  console.log(container);
})

test('player card', () => {
  const container2 = rtl.render(<PlayerCard />)
  console.log(container2);
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

test('contains country', async () => {
  const { findByText } = await rtl.render(<App />);
  findByText(/country/i);
});

test('contains name', async () => {
  const { findByText } = await rtl.render(<App />);
  findByText(/name/i);
});

test('contains times searched', async () => {
  const { findByText } = await rtl.render(<App />);
  findByText(/times searched/i);
});
