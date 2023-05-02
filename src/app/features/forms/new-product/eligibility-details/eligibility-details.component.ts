import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eligibility-details',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './eligibility-details.component.html',
  styleUrls: ['./eligibility-details.component.scss']
})
export class EligibilityDetailsComponent {
  public navList = ['Select Product',
    'Product Details',
    'Eligibility Details',
    'Reviews'
  ]
}
