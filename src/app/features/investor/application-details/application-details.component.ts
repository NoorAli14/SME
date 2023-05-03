import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ReviewDetailsComponent } from "./components/review-details/review-details.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationOfferComponent } from "./components/application-offer/application-offer.component";
import { ApplicationEligibilityComponent } from "./components/application-eligibility/application-eligibility.component";
import { tap } from 'rxjs';

@Component({
    selector: 'app-application-details',
    standalone: true,
    templateUrl: './application-details.component.html',
    styleUrls: ['./application-details.component.scss'],
    imports: [CommonModule, RouterOutlet, ReviewDetailsComponent, NgbNavModule, ApplicationOfferComponent, ApplicationEligibilityComponent, RouterModule]
})
export class ApplicationDetailsComponent implements OnInit{

    public param: string = '';

    constructor(private readonly _activatedRoute: ActivatedRoute){}
    
    ngOnInit(): void {
        this._activatedRoute.params.pipe(
            tap(param => this.param = param['type'])
        ).subscribe();
    }

}
