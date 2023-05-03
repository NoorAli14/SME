import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{
	public param: any;

	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
		private _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	ngOnInit(): void {
		this.initPage();
	}

	open(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	initPage(){
		this._activatedRoute.params.pipe(
		  tap(param => this.param = param['screen'])
		).subscribe();
	  }	
	
	ngOnDestroy(){
		this.modalService.dismissAll();
	}

}
