import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { Store } from '@ngrx/store';
import * as fromSelectors from './pokemon.selectors';
import * as fromActions from './pokemon.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
