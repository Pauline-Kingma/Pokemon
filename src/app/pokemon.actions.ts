import { createAction } from '@ngrx/store';

export const getPokemon = createAction('[Pokemon] Get Pokemon');
export const getPokemonSuccess = createAction('[Pokemon] Get Pokemon Success', (pokemon: PokemonList) => ({ pokemon }));
export const getPokemonFail = createAction('[Pokemon] Get Pokemon Fail', (error: Error) => ({ error }));

export const getPokemonLoading = createAction('[Pokemon] Get Pokemon Loading');
