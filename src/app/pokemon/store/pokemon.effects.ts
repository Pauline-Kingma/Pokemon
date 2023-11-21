import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import * as fromActions from './pokemon.actions';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly pokemonService: PokemonService
  ) { }

  getPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getPokemon),
    switchMap(() => this.pokemonService.getPokemon().pipe(
      // delay(5000),
      map(pokemon => fromActions.getPokemonSuccess({ pokemon })),
      catchError(() => of(fromActions.getPokemonFailure()))
    ))
  ));

  deletePokemon$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deletePokemon),
    switchMap(action => this.pokemonService.deletePokemon(action.id).pipe(
      map(() => fromActions.deletePokemonSuccess({ id: action.id })),
      catchError(() => of(fromActions.deletePokemonFailure()))
    ))
  ));
}
