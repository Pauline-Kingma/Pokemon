import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import pokemonMock from '../mocks/pokemon.mock.json';
import { PokemonList } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  getPokemon(): Observable<PokemonList> {
    return of(pokemonMock as any as PokemonList);
  }

  deletePokemon(id: number): Observable<Object> {
    console.log('deletePokemonInService', id);
    return of({});
  }
}
