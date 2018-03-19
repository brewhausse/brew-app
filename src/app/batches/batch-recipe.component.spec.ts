import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRecipeComponent } from './batch-recipe.component';

describe('BatchRecipeComponent', () => {
  let component: BatchRecipeComponent;
  let fixture: ComponentFixture<BatchRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
