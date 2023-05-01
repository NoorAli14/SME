import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-required-consents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './required-consents.component.html',
  styleUrls: ['./required-consents.component.scss']
})
export class RequiredConsentsComponent {

	constructor(config: NgbModalConfig, private modalService: NgbModal, private _router: Router) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	goToDashboard(){
		this.modalService.dismissAll();
		this._router.navigate(['/home'])
	}

}
