import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingResultsComponent } from './checking-results.component';

describe('CheckingResultsComponent', () => {
  let component: CheckingResultsComponent;
  let fixture: ComponentFixture<CheckingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
