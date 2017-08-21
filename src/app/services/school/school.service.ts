import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {

  subjectListMock = {
    error: false,
    subjectList: [
      {
        id: 10,
        subjectName: 'Sejarah',
        class: {}
      },
      {
        id: 20,
        subjectName: 'Sejarah',
        class: {}
      },
      {
        id: 30,
        subjectName: 'IPA',
        class: {}
      },
      {
        id: 30,
        subjectName: 'IPS',
        class: {}
      },
      {
        id: 30,
        subjectName: 'Kesenian',
        class: {}
      }
    ]
  };

  constructor() { }

  getSubjectList() {
    return subjectListMock;
  }

}
