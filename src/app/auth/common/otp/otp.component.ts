import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgOtpInputModule } from  'ng-otp-input';
import { tap } from 'rxjs';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit{
  public param: any;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ){}

  ngOnInit(): void {
    this.initPage();
  }

  initPage(){
    this._activatedRoute.params.pipe(
      tap(param => this.param = param['screen'])
    ).subscribe();
  }

  onOtpChange(event:any){
    console.log(event)
  }

  navigateNext(){
    let url = '/auth/change-password';
    if(this.param == 'company') url = '/auth/change-password'
    else if(this.param == 'finance') url = '/investor/application-review/accepted' 
    this._router.navigate([url])
  }

}
