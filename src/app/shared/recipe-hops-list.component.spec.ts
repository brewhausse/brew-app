import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHopsListComponent } from './recipe-hops-list.component';

describe('RecipeHopsListComponent', () => {
  let component: RecipeHopsListComponent;
  let fixture: ComponentFixture<RecipeHopsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHopsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
