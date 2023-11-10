import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromActions from '../../../pokemon/store/pokemon.actions';
import * as fromSelectors from '../../../pokemon/store/pokemon.selectors';

@Component({
  selector: 'pok-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {
  pokemon$: Observable<Pokemon[] | undefined> | undefined = undefined;
  loading$: Observable<boolean> | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getPokemon());

    this.pokemon$ = this.store.select(fromSelectors.getPokemon);
    this.loading$ = this.store.select(fromSelectors.getLoading);
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.store.dispatch(fromActions.deletePokemon({ name: pokemon.name }));
  }
}
