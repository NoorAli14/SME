import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-brief',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-brief.component.html',
  styleUrls: ['./finance-brief.component.scss']
})
export class FinanceBriefComponent {

  @Input() heading: string = '';
  @Input() imageUrl: string = '';

}
