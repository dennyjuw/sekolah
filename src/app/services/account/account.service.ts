import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }

  getUserData() {
    return ({
      userId: 42,
      firstName: 'Budia',
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
