import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceBriefV2Component } from '../../common/finance-brief-v2/finance-brief-v2.component';

@Component({
  selector: 'app-finance-marketplace',
  standalone: true,
  imports: [CommonModule, FinanceBriefV2Component],
  templateUrl: './finance-marketplace.component.html',
  styleUrls: ['./finance-marketplace.component.scss']
})
export class FinanceMarketplaceComponent {

}
