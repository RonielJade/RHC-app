import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  public captcha:any = 'Epsl0 vecTor';
  public inputUser:any;
  constructor() { }

  ngOnInit() {
  }
  User(actinputUser:any){
    this.inputUser = actinputUser.userInput
    console.log(this.inputUser)
    console.log(this.captcha)
  }

  
}
