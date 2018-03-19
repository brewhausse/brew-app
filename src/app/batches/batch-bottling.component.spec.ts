import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchBottlingComponent } from './batch-bottling.component';

describe('BatchBottlingComponent', () => {
  let component: BatchBottlingComponent;
  let fixture: ComponentFixture<BatchBottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchBottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchBottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
