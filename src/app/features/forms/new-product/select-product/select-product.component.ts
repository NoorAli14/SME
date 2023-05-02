import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductFormComponent } from '../new-product-form/new-product-form.component';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-product',
  standalone: true,
  imports: [CommonModule, NewProductFormComponent, FormProgressListComponent, RouterModule],
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent {
  public data = {
    heading: 'Select Product',
    next: '/form/product-details',
  }
  public navList = ['Select Product',
    'Product Details',
    'Eligibility Details',
    'Reviews'
  ]
}
