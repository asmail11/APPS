import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GategoryTreeComponent } from './gategory-tree.component';

describe('GategoryTreeComponent', () => {
  let component: GategoryTreeComponent;
  let fixture: ComponentFixture<GategoryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GategoryTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GategoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
