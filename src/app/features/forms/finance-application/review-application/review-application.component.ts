import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-review-application',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.scss']
})
export class ReviewApplicationComponent {
  public navList = ['Select Product',
    'Check Finance Eligibility',
    'Review Application',
    'Accept Agreement'
  ]
}
