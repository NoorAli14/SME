import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormProgressListComponent } from 'src/app/features/common/form-progress-list/form-progress-list.component';


@Component({
  selector: 'app-complete-profile',
  standalone: true,
  imports: [CommonModule, FormProgressListComponent, RouterModule],
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent {

  public navList = ['Business Activitves',
    'Correspondence Address',
    'Ownership',
    'Financial Information'
  ]

}
