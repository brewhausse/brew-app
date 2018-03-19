import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeYeastListComponent } from './recipe-yeast-list.component';

describe('RecipeYeastListComponent', () => {
  let component: RecipeYeastListComponent;
  let fixture: ComponentFixture<RecipeYeastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeYeastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeYeastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
