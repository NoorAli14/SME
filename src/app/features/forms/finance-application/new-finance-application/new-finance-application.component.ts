import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceApplicationFormComponent } from '../finance-application-form/finance-application-form.component';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-finance-application',
  standalone: true,
  imports: [CommonModule, FinanceApplicationFormComponent, FormProgressListComponent, RouterLink],
  templateUrl: './new-finance-application.component.html',
  styleUrls: ['./new-finance-application.component.scss']
})
export class NewFinanceApplicationComponent {
  public data = {
    heading: 'Application Form',
    next: '/form/finance-application-eligibility',
  }

  public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]
}
