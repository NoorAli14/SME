import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public navList = ['Select Product',
    'Product Details',
    'Eligibility Details',
    'Reviews'
  ]
}
