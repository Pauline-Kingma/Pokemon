import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import pokemonMock from '../../mocks/pokemon.mock.json';
import * as fromActions from '../../store/pokemon.actions';
import { PokemonState } from '../../store/pokemon.reducer';
import { getPokemon, getTotalCount } from '../../store/pokemon.selectors';
import { PokemonCardsComponent } from './pokemon-cards.component';

describe('PokemonCardsComponent', () => {
  let component: PokemonCardsComponent;
  let fixture: ComponentFixture<PokemonCardsComponent>;
  let store: MockStore<PokemonState>;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardsComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardsComponent);
    store = TestBed.inject<Store<PokemonState>>(Store) as MockStore<PokemonState>;
    store.overrideSelector(getTotalCount, 12);
    store.overrideSelector(getPokemon, pokemonMock.pokemon);
    spyOn(store, 'dispatch').and.callThrough();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action and get selectors results in onInit', () => {
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.getPokemon());
    expect(component.pokemon$).toBeTruthy();
    expect(component.loading$).toBeTruthy();
  });

  it('should dispatch deletePokemon action', () => {
    component.onDeletePokemon(pokemonMock.pokemon[0]);
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.deletePokemon({ id: pokemonMock.pokemon[0].id }));
  });
});
