import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-header',
  providers: [AccountService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.userData = this.accountService.getUserData();
    console.log(this.userData.userId);
  }

  toggleMenu() {
    console.log('toggle menu');
  }

}
