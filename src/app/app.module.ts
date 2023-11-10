import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardsComponent } from './pokemon/components/pokemon-cards/pokemon-cards.component';
import { PokemonCountComponent } from './pokemon/components/pokemon-count/pokemon-count.component';
import { PokemonService } from './pokemon/services/pokemon.service';
import { PokemonEffects } from './pokemon/store/pokemon.effects';
import { PokemonStoreModule } from './pokemon/store/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardsComponent,
    PokemonCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([PokemonEffects]),
    PokemonStoreModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
