import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  constructor(private _router: Router) {}

  public navList: any = [];

  ngOnInit(): void {  
    if(this._router.url.includes('investor')){
      this.navList = [
        {name: 'Home', iconUrl: './assets/icons/sidebar/home.svg', url: '/investor/home'},
        {name: 'Marketplace', iconUrl: './assets/icons/sidebar/investor/marketplace.svg', url: '/investor/marketplace'},
        {name: 'Application Manager', iconUrl: './assets/icons/sidebar/investor/application_manager.svg', url: '/investor/application-manager'},
        {name: 'Product Management', iconUrl: './assets/icons/sidebar/finance-calculator.svg', url: '/investor/product-management'},
        {name: 'Finance Calculators', iconUrl: './assets/icons/sidebar/finance-calculator.svg', url: '/investor/finance-calculator'}
      ]
    }else{
      this.navList = [
        {name: 'Home', iconUrl: './assets/icons/sidebar/home.svg', url: '/home'},
        {name: 'Company Information', iconUrl: './assets/icons/sidebar/company-info.svg', url: '/company-information'},
        {name: 'Finance Application', iconUrl: './assets/icons/sidebar/finance-application.svg', url: '/finance-application'},
        {name: 'Finance Marketplace', iconUrl: './assets/icons/sidebar/finance-marketplace.svg', url: '/finance-marketplace'},
        {name: 'Finance Calculators', iconUrl: './assets/icons/sidebar/finance-calculator.svg', url: '/finance-calculator'}
      ]
    }
  }

}
