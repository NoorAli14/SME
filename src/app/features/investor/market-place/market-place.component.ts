import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceBriefComponent } from "../../common/finance-brief/finance-brief.component";

@Component({
    selector: 'app-market-place',
    standalone: true,
    templateUrl: './market-place.component.html',
    styleUrls: ['./market-place.component.scss'],
    imports: [CommonModule, FinanceBriefComponent]
})
export class MarketPlaceComponent {

}
