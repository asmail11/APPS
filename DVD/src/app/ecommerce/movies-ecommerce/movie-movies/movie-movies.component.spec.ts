import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMoviesComponent } from './movie-movies.component';

describe('MovieMoviesComponent', () => {
  let component: MovieMoviesComponent;
  let fixture: ComponentFixture<MovieMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
