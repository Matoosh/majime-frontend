import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfSpecificationComponent } from './out-of-specification.component';

describe('OutOfSpecificationComponent', () => {
  let component: OutOfSpecificationComponent;
  let fixture: ComponentFixture<OutOfSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
