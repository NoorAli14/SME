import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceApplicationSubmittedComponent } from './finance-application-submitted.component';

describe('FinanceApplicationSubmittedComponent', () => {
  let component: FinanceApplicationSubmittedComponent;
  let fixture: ComponentFixture<FinanceApplicationSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FinanceApplicationSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceApplicationSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
