import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule, PieChartComponent],
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() title: any;
  @Input() option: any;
}
