import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceApplicationFormComponent } from '../finance-application-form/finance-application-form.component';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-new-finance-application',
  standalone: true,
  imports: [CommonModule, FinanceApplicationFormComponent, FormProgressListComponent, RouterLink],
  templateUrl: './new-finance-application.component.html',
  styleUrls: ['./new-finance-application.component.scss']
})
export class NewFinanceApplicationComponent {

  public param: any;
  public buttonClicked: any;
  constructor(
		private _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		) {}

    ngOnInit(): void {
    }

  public data = {
    heading: 'Application Form',
    next: '/form/finance-application-eligibility',
  }

  public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]

  onRadioChange(val: any){
    console.log(val);
    this.buttonClicked = val;
  }
}
