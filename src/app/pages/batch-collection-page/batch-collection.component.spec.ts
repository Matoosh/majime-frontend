import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCollectionComponent } from './batch-collection.component';

describe('BatchCollectionComponent', () => {
  let component: BatchCollectionComponent;
  let fixture: ComponentFixture<BatchCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
