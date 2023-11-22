import pokemonMock from '../mocks/pokemon.mock.json';
import { PokemonState } from './pokemon.reducer';
import * as selectors from './pokemon.selectors';

describe('PokemonSelectors', () => {
  let pokemonState: PokemonState;

  beforeEach(() => {
    pokemonState = {
      pokemonList: pokemonMock,
      loading: false,
      error: false
    };
  });

  it('should return pokemonList', () => {
    expect(selectors.getPokemon.projector(pokemonState)).toEqual(pokemonMock.pokemon);
  });

  it('should return totalCount', () => {
    expect(selectors.getTotalCount.projector(pokemonState)).toEqual(pokemonMock.totalCount);
  });

  it('should return loading', () => {
    expect(selectors.getLoading.projector(pokemonState)).toEqual(false);
  });
});
