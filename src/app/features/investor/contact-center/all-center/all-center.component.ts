import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-center',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './all-center.component.html',
  styleUrls: ['./all-center.component.scss']
})
export class AllCenterComponent {

  closeResult = '';
  radioSelected = 'custom';

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { size: 'lg', centered: true}).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  onRadioChange(e: any){
    this.radioSelected = e.target.value
    console.log(e.target.value)
  }

}
