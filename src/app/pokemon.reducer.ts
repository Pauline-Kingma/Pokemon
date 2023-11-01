import { createReducer, on } from '@ngrx/store';
import * as fromActions from './pokemon.actions';
import { PokemonList } from './pokemon.model';

export interface PokemonState {
  pokemonList: PokemonList;
  loading: boolean;
  error: boolean;
}

const initialState: PokemonState = {
  pokemonList: {
    pokemon: []
  },
  loading: false,
  error: false
};

export const pokemonReducer = createReducer(
  initialState,

  on(fromActions.getPokemon, state => (
    {
      ...state,
      loading: true
    }
  )),

  on(fromActions.getPokemonSuccess, (state, { pokemon }) => (
    {
      ...state,
      pokemonList: pokemon,
      loading: false
    }
  )),

  on(fromActions.getPokemonFailure, state => (
    {
      ...state,
      error: true,
      loading: false
    }
  )),

  on(fromActions.deletePokemonSuccess, (state, { name }) => {
    const newList = state.pokemonList.pokemon.filter(pokemon => pokemon.name !== name);
    console.log(newList.length);
    return {
      ...state,
      pokemonList: {
        ...state.pokemonList,
        pokemon: newList
      }
    }
  }),
);
