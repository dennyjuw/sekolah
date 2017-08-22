import { Injectable } from '@angular/core';
import { find, parseInt } from 'lodash';

@Injectable()
export class TeacherService {

  teacherListMock = {
    error: false,
    teacherList: [
      {
        id: 10,
        name: 'Ferry Gunawan',
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
        id: 20,
        name: 'Santo Rajasa',
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
        id: 30,
        name: 'Budia Budiman',
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
        id: 40,
        name: 'Suherman Antara',
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
