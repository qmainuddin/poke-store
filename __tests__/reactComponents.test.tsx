import React from 'react';
import { render } from '@testing-library/react-native';
import { PokemonListContainer } from '../src/components'; '../src/components/PokemonListContainer';

describe('React Components', () => {
  it('renders PokemonList component correctly', () => {
    const { getByText } = render(<PokemonListContainer loading={false} />);
    expect(getByText('Loading...')).toBeDefined();
  });
});