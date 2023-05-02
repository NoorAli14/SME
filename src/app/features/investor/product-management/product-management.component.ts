import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AllProductsComponent } from './all-products/all-products.component';
import { PublishedProductsComponent } from './published-products/published-products.component';
import { DraftProductsComponent } from './draft-products/draft-products.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    AllProductsComponent,
    PublishedProductsComponent,
    DraftProductsComponent
  ],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {

}
