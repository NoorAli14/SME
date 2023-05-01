import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceOptionComponent } from '../../common/finance-option/finance-option.component';

@Component({
  selector: 'app-finance-calculator',
  standalone: true,
  imports: [CommonModule, FinanceOptionComponent],
  templateUrl: './finance-calculator.component.html',
  styleUrls: ['./finance-calculator.component.scss']
})
export class FinanceCalculatorComponent {

}
