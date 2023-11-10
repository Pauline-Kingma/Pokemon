import { createAction, props } from '@ngrx/store';
import { PokemonList } from '../models/pokemon.model';

export const getPokemon = createAction('[Pokemon] Get Pokemon');
export const getPokemonSuccess = createAction('[Pokemon] Get Pokemon Success', props<{ pokemon: PokemonList }>());
export const getPokemonFailure = createAction('[Pokemon] Get Pokemon Fail');

export const deletePokemon = createAction('[Pokemon] Delete Pokemon', props<{ name: string }>());
export const deletePokemonSuccess = createAction('[Pokemon] Delete Pokemon Success', props<{ name: string }>());
export const deletePokemonFailure = createAction('[Pokemon] Delete Pokemon Fail');
