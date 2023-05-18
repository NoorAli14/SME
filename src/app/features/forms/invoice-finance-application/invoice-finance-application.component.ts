import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from "../../common/form-progress-list/form-progress-list.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { tap } from 'rxjs';

@Component({
    selector: 'app-invoice-finance-application',
    standalone: true,
    templateUrl: './invoice-finance-application.component.html',
    styleUrls: ['./invoice-finance-application.component.scss'],
    imports: [CommonModule, FormProgressListComponent, RouterModule]
})
export class InvoiceFinanceApplicationComponent {

    
  initPage() {
    throw new Error('Method not implemented.');
  }
    public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]
}
