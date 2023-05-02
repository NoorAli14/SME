import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FinanceBriefComponent } from "../../common/finance-brief/finance-brief.component";
import { FinanceOptionComponent } from "../../common/finance-option/finance-option.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, FinanceOptionComponent, NgbNavModule, RouterModule]
})
export class HomeComponent {

}
