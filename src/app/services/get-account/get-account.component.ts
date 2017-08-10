import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.scss']
})
export class GetAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUserData() {
    return ({
      userId: 42,
      firstName: 'Budi',
      lastName: 'Budiman',
      email: 'budi.budiman@sekolahph.com',
      role: 'Guru',
      profilePicture: 'http://via.placeholder.com/55x55',
      school: {
        name: 'Sekolah Pelita Harapan',
        logo: 'http://via.placeholder.com/200x75'
      }
    });
  }
}
