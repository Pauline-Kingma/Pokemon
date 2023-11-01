import { createReducer, on } from '@ngrx/store';
import * as fromActions from './pokemon.actions';
import { PokemonList } from './pokemon.model';

export interface PokemonState {
  pokemon: PokemonList | undefined;
  loading: boolean;
  error: Error | undefined;
}

const initialState: PokemonState = {
  pokemon: undefined,
  loading: false,
  error: undefined
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
      pokemon,
      loading: false
    }
  )),

  on(fromActions.getPokemonFail, (state, { error }) => (
    {
      ...state,
      error,
      loading: false
    }
  ))
);
