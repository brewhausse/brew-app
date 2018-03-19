import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchBrewdayComponent } from './batch-brewday.component';

describe('BatchBrewdayComponent', () => {
  let component: BatchBrewdayComponent;
  let fixture: ComponentFixture<BatchBrewdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchBrewdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchBrewdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
