import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application-offer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './application-offer.component.html',
  styleUrls: ['./application-offer.component.scss']
})
export class ApplicationOfferComponent {
  @Input() param: string = '';
}
