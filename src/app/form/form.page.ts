import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SendData(dataForm:any){
    let data:string = JSON.stringify(dataForm);
    localStorage.setItem('persoInfo',data);
  }
}
