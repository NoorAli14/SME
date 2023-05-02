import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceApplicationFormComponent } from '../finance-application-form/finance-application-form.component';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application-eligibility-check',
  standalone: true,
  imports: [CommonModule, FinanceApplicationFormComponent, FormProgressListComponent, RouterModule],
  templateUrl: './application-eligibility-check.component.html',
  styleUrls: ['./application-eligibility-check.component.scss']
})
export class ApplicationEligibilityCheckComponent {
  public data = {
    heading: 'Check Finance Eligibility',
    next: '/form/review-application',
  }
  public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]
}
