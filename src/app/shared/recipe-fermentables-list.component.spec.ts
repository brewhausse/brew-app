import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFermentablesListComponent } from './recipe-fermentables-list.component';

describe('RecipeFermentablesListComponent', () => {
  let component: RecipeFermentablesListComponent;
  let fixture: ComponentFixture<RecipeFermentablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFermentablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFermentablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
