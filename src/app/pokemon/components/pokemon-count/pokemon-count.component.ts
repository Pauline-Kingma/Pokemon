import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTotalCount } from '../../store/pokemon.selectors';

@Component({
  selector: 'pok-pokemon-count',
  templateUrl: './pokemon-count.component.html',
  styleUrls: ['./pokemon-count.component.scss']
})
export class PokemonCountComponent implements OnInit {
  totalCount$: Observable<number | undefined> | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.totalCount$ = this.store.select(getTotalCount);
    this.totalCount$.subscribe(count => console.log(count));
  }
}
