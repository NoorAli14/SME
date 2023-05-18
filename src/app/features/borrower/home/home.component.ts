import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardCardComponent } from '../../common/dashboard-card/dashboard-card.component';
import { DashboardCard2Component } from '../../common/dashboard-card2/dashboard-card2.component';
import { LineChartComponent } from '../../common/line-chart/line-chart.component';
import { PieChartComponent } from '../../common/pie-chart/pie-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DashboardCardComponent,
    DashboardCard2Component,
    LineChartComponent,
    PieChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public balance = {
    label: 'Total balance',
    value: '724,620,918'
  }
  public selectBalance = [
    'BDH'
  ]

  public pending = {
    label: 'Pending Authorization',
    value: '12'
  }
  public selectPending = [
    'This Month'
  ]

  public bill = {
    label: 'Bill Payments',
    value: '15'
  }
  public selectBill = [
    'This Month'
  ]

  public investment = {
    label: 'Investment',
    value: '5'
  }
  public selectInvestment = [
    'This Month'
  ]
}
