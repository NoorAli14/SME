import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FinanceBriefComponent } from '../../common/finance-brief/finance-brief.component';
import { FinanceOptionComponent } from '../../common/finance-option/finance-option.component';

@Component({
  selector: 'app-offer-letters',
  standalone: true,
  imports: [CommonModule, FinanceBriefComponent, FinanceOptionComponent, NgbNavModule, RouterModule],
  templateUrl: './offer-letters.component.html',
  styleUrls: ['./offer-letters.component.scss']
})
export class OfferLettersComponent {

}
