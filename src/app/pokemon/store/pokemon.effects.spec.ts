import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { ReplaySubject, of, throwError } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import * as fromActions from './pokemon.actions';
import { PokemonEffects } from './pokemon.effects';
import { PokemonState } from './pokemon.reducer';

describe('PokemonEffects', () => {
  let actions: ReplaySubject<Action>;
  let effects: PokemonEffects;
  let pokemonService: jasmine.SpyObj<PokemonService>;
  let store: MockStore<PokemonState>;

  const initialState = {} as PokemonState;

  beforeEach(() => {
    actions = new ReplaySubject<Action>(1);
    pokemonService = jasmine.createSpyObj<PokemonService>('PokemonService', ['getPokemon', 'deletePokemon']);

    TestBed.configureTestingModule({
      providers: [
        PokemonEffects,
        { provide: PokemonService, useValue: pokemonService },
        provideMockActions(() => actions),
        provideMockStore<PokemonState>({ initialState })
      ]
    });

    effects = TestBed.inject(PokemonEffects);
    store = TestBed.inject<Store<PokemonState>>(Store) as MockStore<PokemonState>;
  });

  describe('getPokemon$', () => {
    it('should return getPokemonSuccess action', () => {
      pokemonService.getPokemon.and.returnValue(of({ pokemon: [], totalCount: 0 }));

      actions.next(fromActions.getPokemon());

      const expected = cold('a', {
        a: fromActions.getPokemonSuccess({ pokemon: { pokemon: [], totalCount: 0 } })
      });

      expect(effects.getPokemon$).toBeObservable(expected);
    });

    it('should return getPokemonFailure action', () => {
      pokemonService.getPokemon.and.returnValue(throwError(() => new Error()));

      actions.next(fromActions.getPokemon());

      const expected = cold('a', {
        a: fromActions.getPokemonFailure()
      });

      expect(effects.getPokemon$).toBeObservable(expected);
    });
  });
});
