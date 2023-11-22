import { createReducer, on } from '@ngrx/store';
import { PokemonList } from '../models/pokemon.model';
import * as fromActions from './pokemon.actions';

export interface PokemonState {
  pokemonList: PokemonList;
  loading: boolean;
  error: boolean;
}

const initialState: PokemonState = {
  pokemonList: {
    pokemon: [],
    totalCount: 0
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

  on(fromActions.deletePokemonSuccess, (state, { id }) => {
    const newList = state.pokemonList.pokemon.filter(pokemon => pokemon.id !== id);
    return {
      ...state,
      pokemonList: {
        ...state.pokemonList,
        pokemon: newList,
        totalCount: state.pokemonList.totalCount - 1
      }
    }
  }),
);

export const reducers = (state: PokemonState, action: any) => pokemonReducer(state, action);
