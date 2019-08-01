import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartMoviesComponent } from './shopping-cart-movies.component';

describe('ShoppingCartMoviesComponent', () => {
  let component: ShoppingCartMoviesComponent;
  let fixture: ComponentFixture<ShoppingCartMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
