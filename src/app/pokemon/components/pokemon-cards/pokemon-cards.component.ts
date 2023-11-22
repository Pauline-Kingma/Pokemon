import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from '../../../pokemon/store/pokemon.actions';
import * as fromSelectors from '../../../pokemon/store/pokemon.selectors';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'pok-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {
  pokemon$: Observable<Pokemon[] | undefined> | undefined = undefined;
  loading$: Observable<boolean> | undefined = undefined;
  error$: Observable<boolean> | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getPokemon());

    this.pokemon$ = this.store.select(fromSelectors.getPokemon);
    this.loading$ = this.store.select(fromSelectors.getLoading);
    this.error$ = this.store.select(fromSelectors.getError);
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.store.dispatch(fromActions.deletePokemon({ id: pokemon.id }));
  }
}
