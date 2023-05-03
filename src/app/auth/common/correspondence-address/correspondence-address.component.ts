import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-correspondence-address',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './correspondence-address.component.html',
  styleUrls: ['./correspondence-address.component.scss']
})
export class CorrespondenceAddressComponent {

  public navList = ['Business Activitves',
  'Correspondence Address',
  'Ownership',
  'Financial Information'
]

}
