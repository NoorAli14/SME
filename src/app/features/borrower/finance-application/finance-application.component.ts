import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceOptionComponent } from '../../common/finance-option/finance-option.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finance-application',
  standalone: true,
  imports: [CommonModule, FinanceOptionComponent, NgbNavModule],
  templateUrl: './finance-application.component.html',
  styleUrls: ['./finance-application.component.scss']
})
export class FinanceApplicationComponent {

}
