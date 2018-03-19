import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchFermentationComponent } from './batch-fermentation.component';

describe('BatchFermentationComponent', () => {
  let component: BatchFermentationComponent;
  let fixture: ComponentFixture<BatchFermentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchFermentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchFermentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
