import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSampleComponent } from './form-add-sample.component';

describe('FormAddSampleComponent', () => {
  let component: FormAddSampleComponent;
  let fixture: ComponentFixture<FormAddSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
