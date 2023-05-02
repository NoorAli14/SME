import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';

@Component({
  selector: 'app-financial-information',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent],
  templateUrl: './financial-information.component.html',
  styleUrls: ['./financial-information.component.scss']
})
export class FinancialInformationComponent {

  public navList = ['Business Activitves',
  'Correspondence Address',
  'Ownership',
  'Financial Information'
]

}
