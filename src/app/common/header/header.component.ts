import { Component, OnInit } from '@angular/core';
import { GetAccountComponent } from '../../services/get-account/get-account.component';

@Component({
  selector: 'app-header',
  providers: [GetAccountComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData;

  constructor(private getAccountService: GetAccountComponent) {   
  }

  ngOnInit() {
    this.userData = this.getAccountService.getUserData();
    console.log(this.userData.userId);
  }

  toggleMenu() {
    console.log('toggle menu');
  }

}
