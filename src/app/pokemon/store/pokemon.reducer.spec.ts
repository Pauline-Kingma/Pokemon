import pokemonMock from '../mocks/pokemon.mock.json';
import * as fromActions from './pokemon.actions';
import { PokemonState, reducers } from './pokemon.reducer';

describe('PokemonReducer', () => {
  const state: PokemonState = {
    pokemonList: pokemonMock,
    loading: false,
    error: false
  };

  it('should set loading to true when getPokemon is called', () => {
    const result = reducers(state, fromActions.getPokemon());
    expect(result.loading).toBe(true);
  });

  it('should set loading to false and set pokemonList when getPokemonSuccess is called', () => {
    const result = reducers(state, fromActions.getPokemonSuccess({ pokemon: pokemonMock }));
    expect(result.loading).toBe(false);
    expect(result.pokemonList).toEqual(pokemonMock);
  });

  it('should set loading to false and set error to true when getPokemonFailure is called', () => {
    const result = reducers(state, fromActions.getPokemonFailure());
    expect(result.loading).toBe(false);
    expect(result.error).toBe(true);
  });

  it('should remove pokemon from pokemonList when deletePokemonSuccess is called', () => {
    const result = reducers(state, fromActions.deletePokemonSuccess({ id: 1 }));
    expect(result.pokemonList.pokemon.length).toBe(11);
  });
});
