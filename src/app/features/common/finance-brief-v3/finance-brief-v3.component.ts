import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-brief-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-brief-v3.component.html',
  styleUrls: ['./finance-brief-v3.component.scss']
})
export class FinanceBriefV3Component {

  @Input() heading: string = '';
  @Input() imageUrl: string = '';
  
}
