import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application-manager',
  standalone: true,
  imports: [CommonModule, NgbNavModule, RouterModule],
  templateUrl: './application-manager.component.html',
  styleUrls: ['./application-manager.component.scss']
})
export class ApplicationManagerComponent {

}
