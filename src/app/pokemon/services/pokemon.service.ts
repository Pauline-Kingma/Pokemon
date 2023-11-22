import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import pokemonMock from '../mocks/pokemon.mock.json';
import { PokemonList } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  getPokemon(): Observable<PokemonList> {
    return of(pokemonMock as any as PokemonList);
    // return throwError(() => new Error('Error'));
  }

  deletePokemon(id: number): Observable<Object> {
    console.log('deletePokemonInService', id);
    return of({});
  }
}
