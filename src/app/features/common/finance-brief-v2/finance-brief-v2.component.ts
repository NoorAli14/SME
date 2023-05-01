import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-brief-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-brief-v2.component.html',
  styleUrls: ['./finance-brief-v2.component.scss']
})
export class FinanceBriefV2Component {

  @Input() heading: string = '';
  @Input() imageUrl: string = '';

}
