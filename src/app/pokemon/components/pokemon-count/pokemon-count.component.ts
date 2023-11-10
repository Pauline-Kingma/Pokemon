import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { getPokemon } from '../../store/pokemon.selectors';

@Component({
  selector: 'pok-pokemon-count',
  templateUrl: './pokemon-count.component.html',
  styleUrls: ['./pokemon-count.component.scss']
})
export class PokemonCountComponent implements OnInit {
  pokemon$: Observable<Pokemon[] | undefined> | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.pokemon$ = this.store.select(getPokemon);
  }
}
