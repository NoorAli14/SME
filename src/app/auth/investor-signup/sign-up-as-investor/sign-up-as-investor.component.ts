import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up-as-investor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sign-up-as-investor.component.html',
  styleUrls: ['./sign-up-as-investor.component.scss']
})
export class SignUpAsInvestorComponent {

	constructor(config: NgbModalConfig, private modalService: NgbModal, private _router: Router) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	ngOnDestroy(){
		this.modalService.dismissAll();
	}

}
