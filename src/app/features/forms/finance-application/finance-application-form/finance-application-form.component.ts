import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finance-application-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './finance-application-form.component.html',
  styleUrls: ['./finance-application-form.component.scss']
})
export class FinanceApplicationFormComponent {

  @Input() data: any = {};

}
