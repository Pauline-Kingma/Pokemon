import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import pokemonMock from './pokemon.mock.json';
import { PokemonList } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  getPokemon(): Observable<PokemonList> {
    return of(pokemonMock as any as PokemonList);
  }

  deletePokemon(name: string): Observable<Object> {
    console.log('deletePokemonInService', name);
    return of({});
  }
}
