import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 public userData:any={};
 public userNum:any={};
  constructor(private router: Router) { }
  
  ngOnInit() {
    let backdata:any = localStorage.getItem('persoInfo');
    let actualdata = JSON.parse(backdata);
    this.userData = actualdata;

    let backdata2:any = localStorage.getItem('userNumber');
    let actualdata2 = JSON.parse(backdata2);
    this.userNum = actualdata2;
  }

  navigateToAnotherPage(){
    this.router.navigate(['/landing-page']);
  }
  
  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
    },
    {
      text: 'Yes',
      role: 'confirm',
      bool: 'Yes',
      handler: () => {
        localStorage.clear()
        this.navigateToAnotherPage();
      },
    },
  ];

  


}
