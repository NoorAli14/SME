import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
}
