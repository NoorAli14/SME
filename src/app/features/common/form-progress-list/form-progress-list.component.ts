import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-progress-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-progress-list.component.html',
  styleUrls: ['./form-progress-list.component.scss']
})
export class FormProgressListComponent {
  @Input() navList: any;
  @Input() itemIndex: any;

}
