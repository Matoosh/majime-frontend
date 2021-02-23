import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigningResearchComponent } from './assigning-research.component';

describe('AssigningResearchComponent', () => {
  let component: AssigningResearchComponent;
  let fixture: ComponentFixture<AssigningResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigningResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigningResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
