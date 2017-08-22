import { Injectable } from '@angular/core';
import { find, parseInt } from 'lodash';

@Injectable()
export class SchoolService {

  subjectListMock = {
    error: false,
    subjectList: [
      {
        id: 10,
        subjectName: 'Pendidikan Agama',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 20,
        subjectName: 'Pendidikan Pancasila dan Kewarganegaraan',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 30,
        subjectName: 'Bahasa Indonesia',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 40,
        subjectName: 'Matematika',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 50,
        subjectName: 'Ilmu Pengetahuan Alam',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 60,
        subjectName: 'Ilmu Pengetahuan Sosial',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 70,
        subjectName: 'Seni Budaya dan Keterampilan',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      },
      {
        id: 80,
        subjectName: 'Pendidikan Jasmani dan Kesehatan',
        subjectBook: '',
        subjectTeacher: {
          id: 0,
          teacherName: ''
        }
      }
    ]
  };

  classListMock = {
    error: false,
    classList: [
      {
        id: 10,
        className: 'Kelas 1A',
        classType: 'Sekolah Dasar',
        homeTeacher: {
          id: 10,
          teacherName: 'Ferry Gunawan'
        },
        subject: [
          {
            id: 10,
            subjectName: 'Pendidikan Agama'
          },
          {
            id: 20,
            subjectName: 'Pendidikan Pancasila dan Kewarganegaraan'
          },
          {
            id: 30,
            subjectName: 'Bahasa Indonesia'
          },
          {
            id: 40,
            subjectName: 'Matematika'
          },
          {
            id: 70,
            subjectName: 'Seni Budaya dan Keterampilan'
          },
          {
            id: 80,
            subjectName: 'Pendidikan Jasmani dan Kesehatan'
          }
        ]
      },
      {
        id: 11,
        className: 'Kelas 1B',
        classType: 'Sekolah Dasar',
        homeTeacher: {
          id: 10,
          teacherName: 'Ferry Gunawan'
        },
        subject: [
          {
            id: 10,
            subjectName: 'Pendidikan Agama'
          },
          {
            id: 20,
            subjectName: 'Pendidikan Pancasila dan Kewarganegaraan'
          },
          {
            id: 30,
            subjectName: 'Bahasa Indonesia'
          },
          {
            id: 40,
            subjectName: 'Matematika'
          },
          {
            id: 70,
            subjectName: 'Seni Budaya dan Keterampilan'
          },
          {
            id: 80,
            subjectName: 'Pendidikan Jasmani dan Kesehatan'
          }
        ]
      },
      {
        id: 20,
        className: 'Kelas 2',
        classType: 'Sekolah Dasar',
        homeTeacher: {
          id: 20,
          teacherName: 'Santo Rajasa'
        },
        subject: [
          {
            id: 10,
            subjectName: 'Pendidikan Agama'
          },
          {
            id: 20,
            subjectName: 'Pendidikan Pancasila dan Kewarganegaraan'
          },
          {
            id: 30,
            subjectName: 'Bahasa Indonesia'
          },
          {
            id: 40,
            subjectName: 'Matematika'
          },
          {
            id: 70,
            subjectName: 'Seni Budaya dan Keterampilan'
          },
          {
            id: 80,
            subjectName: 'Pendidikan Jasmani dan Kesehatan'
          }
        ]
      },
      {
        id: 30,
        className: 'Kelas 3',
        classType: 'Sekolah Dasar',
        homeTeacher: {
          id: 30,
          teacherName: 'Budia Budiman'
        },
        subject: [
          {
            id: 10,
            subjectName: 'Pendidikan Agama'
          },
          {
            id: 20,
            subjectName: 'Pendidikan Pancasila dan Kewarganegaraan'
          },
          {
            id: 30,
            subjectName: 'Bahasa Indonesia'
          },
          {
            id: 40,
            subjectName: 'Matematika'
          },
          {
            id: 70,
            subjectName: 'Seni Budaya dan Keterampilan'
          },
          {
            id: 80,
            subjectName: 'Pendidikan Jasmani dan Kesehatan'
          }
        ]
      },
      {
        id: 40,
        className: 'Kelas 4',
        classType: 'Sekolah Dasar',
        homeTeacher: {
          id: 30,
          teacherName: 'Budia Budiman'
        },
        subject: [
          {
            id: 10,
            subjectName: 'Pendidikan Agama'
          },
          {
            id: 20,
            subjectName: 'Pendidikan Pancasila dan Kewarganegaraan'
          },
          {
            id: 30,
            subjectName: 'Bahasa Indonesia'
          },
          {
            id: 40,
            subjectName: 'Matematika'
          },
          {
            id: 50,
            subjectName: 'Ilmu Pengetahuan Alam'
          },
          {
            id: 60,
            subjectName: 'Ilmu Pengetahuan Sosial'
          },
          {
            id: 70,
            subjectName: 'Seni Budaya dan Keterampilan'
          },
          {
            id: 80,
            subjectName: 'Pendidikan Jasmani dan Kesehatan'
          }
        ]
      }
    ]
  }

  constructor() { }

  getSubjectList() {
    return this.subjectListMock;
  }

  getClassList() {
    return this.classListMock.classList;
  }

  getClass(classId) {
    let classList: Array<Object> = this.classListMock.classList;
    let classData = find(classList, ['id', parseInt(classId)]);
    return classData;
  }
}
