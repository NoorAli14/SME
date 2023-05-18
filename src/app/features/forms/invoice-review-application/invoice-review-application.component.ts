import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from "../../common/form-progress-list/form-progress-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invoice-review-application',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './invoice-review-application.component.html',
  styleUrls: ['./invoice-review-application.component.scss']
})
export class InvoiceReviewApplicationComponent {

  public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]

}
