import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PokemonState } from '../../store/pokemon.reducer';
import { getTotalCount } from '../../store/pokemon.selectors';
import { PokemonCountComponent } from './pokemon-count.component';

describe('PokemonCountComponent', () => {
  let component: PokemonCountComponent;
  let fixture: ComponentFixture<PokemonCountComponent>;
  let store: MockStore<PokemonState>;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCountComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCountComponent);
    store = TestBed.inject<Store<PokemonState>>(Store) as MockStore<PokemonState>;
    store.overrideSelector(getTotalCount, 12);
    spyOn(store, 'dispatch').and.callThrough();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show totalCount from selector', () => {
    expect(fixture.nativeElement.querySelector('div').textContent).toContain('12');
  });
});
