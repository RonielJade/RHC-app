import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SendData(number:any){
    let stringNum:string = JSON.stringify(number);
    localStorage.setItem('userNumber', stringNum);
    
  }
}
