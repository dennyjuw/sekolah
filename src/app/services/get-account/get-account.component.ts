import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.css']
})
export class GetAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAccountData() {
    return [
      "Donald Trump",
      "Rand Paul",
      "Ben Carson"
    ]
  }
}
