import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCountComponent } from './pokemon-count.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PokemonState } from '../../store/pokemon.reducer';
import { Store } from '@ngrx/store';
import { getPokemon } from '../../store/pokemon.selectors';
import pokemonMock from '../../mocks/pokemon.mock.json';

describe('PokemonCountComponent', () => {
  let component: PokemonCountComponent;
  let fixture: ComponentFixture<PokemonCountComponent>;
  let store: MockStore<PokemonState>;
  const initialState = { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCountComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCountComponent);
    store = TestBed.inject<Store<PokemonState>>(Store) as MockStore<PokemonState>;
    store.overrideSelector(getPokemon, pokemonMock.pokemon);
    spyOn(store, 'dispatch').and.callThrough();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
