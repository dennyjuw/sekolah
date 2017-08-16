import { Injectable } from '@angular/core';
import { find, parseInt } from 'lodash';

@Injectable()
export class TeacherService {

  teacherListMock = {
    error: false,
    teacherList: [
      {
        id: 22,
        firstName: 'Ferry',
        lastName: 'Gunawan',
        email: 'ferry.gunawann@sekolahph.com',
        profilePicture: 'http://via.placeholder.com/55x55',
        dob: '11/06/1970',
        address: 'Jl. Merdeka Raya 5 No.12, Pluit',
        phone: '62230108',
        mobile: '08125506000',
        subject: '',
        class: ''
      },
      {
        id: 32,
        firstName: 'Santo',
        lastName: 'Rajasa',
        email: 'santo.rajasa@sekolahph.com',
        profilePicture: 'http://via.placeholder.com/55x55',
        dob: '11/06/1970',
        address: 'Jl. Merdeka Raya 5 No.12, Pluit',
        phone: '62230108',
        mobile: '08125506000',
        subject: '',
        class: ''
      },
      {
        id: 42,
        firstName: 'Budia',
        lastName: 'Budiman',
        email: 'budi.budiman@sekolahph.com',
        profilePicture: 'http://via.placeholder.com/55x55',
        dob: '11/06/1970',
        address: 'Jl. Merdeka Raya 5 No.12, Pluit',
        phone: '62230108',
        mobile: '08125506000',
        subject: '',
        class: ''
      },
      {
        id: 52,
        firstName: 'Suherman',
        lastName: 'Antara',
        email: 'suherman.antara@sekolahph.com',
        profilePicture: 'http://via.placeholder.com/55x55',
        dob: '11/06/1970',
        address: 'Jl. Merdeka Raya 5 No.12, Pluit',
        phone: '62230108',
        mobile: '08125506000',
        subject: '',
        class: ''
      }
    ]
  };

  constructor() { }

  getTeacherList() {
    return this.teacherListMock.teacherList;
  }

  getTeacher(teacherId) {
    let teacherList: Array<Object> = this.teacherListMock.teacherList;
    let teacherData = find(teacherList, ['id', parseInt(teacherId)]);
    return teacherData;
  }

  addTeacher() {
    return 'addTeacher';
  }

  editTeacher() {
    return 'editTeacher';
  }

  removeTeacher() {
    return 'removeTeacher';
  }
}
