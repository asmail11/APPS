import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesEcommerceComponent } from './movies-ecommerce.component';

describe('MoviesEcommerceComponent', () => {
  let component: MoviesEcommerceComponent;
  let fixture: ComponentFixture<MoviesEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
