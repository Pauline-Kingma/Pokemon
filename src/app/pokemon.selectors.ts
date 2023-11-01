import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

export const getPokemonFeatureState = createFeatureSelector<PokemonState>('pokemon');

export const getPokemon = createSelector(getPokemonFeatureState, state => state.pokemonList?.pokemon);
export const getLoading = createSelector(getPokemonFeatureState, state => state.loading);
