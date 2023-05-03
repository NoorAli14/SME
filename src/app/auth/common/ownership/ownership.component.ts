import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ownership',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent {

  public navList = ['Business Activitves',
  'Correspondence Address',
  'Ownership',
  'Financial Information'
]

}
