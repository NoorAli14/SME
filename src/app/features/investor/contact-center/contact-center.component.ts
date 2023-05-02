import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AllCenterComponent } from './all-center/all-center.component';

@Component({
  selector: 'app-contact-center',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    AllCenterComponent
  ],
  templateUrl: './contact-center.component.html',
  styleUrls: ['./contact-center.component.scss']
})
export class ContactCenterComponent {

}
