import { Component, OnInit } from '@angular/core';
import { GetAccountComponent } from '../../services/get-account/get-account.component';

@Component({
  selector: 'app-header',
  providers: [GetAccountComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameList: Array<String>

  constructor(private getAccountService: GetAccountComponent) { 
    this.nameList = getAccountService.getAccountData();
    console.log(this.nameList);  
  }

  ngOnInit() {
  }

}
