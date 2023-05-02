import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent, HeaderComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
}
