import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

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
