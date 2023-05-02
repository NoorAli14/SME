import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceBriefV3Component } from 'src/app/features/common/finance-brief-v3/finance-brief-v3.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FinanceBriefV3Component],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

}
