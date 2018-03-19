import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStatsComponent } from './recipe-stats.component';

describe('RecipeStatsComponent', () => {
  let component: RecipeStatsComponent;
  let fixture: ComponentFixture<RecipeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
