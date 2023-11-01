import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './pokemon.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('pokemon', pokemonReducer)
  ]
})
export class PokemonStoreModule { }
