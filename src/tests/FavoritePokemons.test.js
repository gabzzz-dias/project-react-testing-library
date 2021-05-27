import React from 'react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

test('if shows "no pokemon found" message if dont have favorite pokémons', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/favorites');

  const anyPokemon = getByText(/no favorite pokemon found/i);
  expect(anyPokemon).toBeInTheDocument();
});
