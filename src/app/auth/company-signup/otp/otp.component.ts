import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from  'ng-otp-input';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {

  onOtpChange(event:any){
    console.log(event)
  }
}
