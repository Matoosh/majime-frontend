import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchAdoptionComponent } from './batch-adoption.component';

describe('BatchAdoptionComponent', () => {
  let component: BatchAdoptionComponent;
  let fixture: ComponentFixture<BatchAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
