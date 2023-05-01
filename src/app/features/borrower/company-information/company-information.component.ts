import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddressComponent } from './address/address.component';
import { BankingRelationshipComponent } from './banking-relationship/banking-relationship.component';
import { FinancialInformationComponent } from './financial-information/financial-information.component';
import { ManagementPersonnelComponent } from './management-personnel/management-personnel.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { SubsidiariesComponent } from './subsidiaries/subsidiaries.component';

@Component({
  selector: 'app-company-information',
  standalone: true,
  imports: [ CommonModule, 
    NgbNavModule, 
    CompanyDetailsComponent, 
    AddressComponent, 
    BankingRelationshipComponent, 
    FinancialInformationComponent, 
    ManagementPersonnelComponent, 
    OwnershipComponent, 
    SubsidiariesComponent ],
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent {

}
