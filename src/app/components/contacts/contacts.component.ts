import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor() {}
  contactArray: Contact[] = [
    {
      name: 'Oz Amar',
      email: 'oz@gmail.com',
      date: '26/11/1996',
      phone: '0521234567',
    },
    {
      name: 'Dor Taizi',
      email: 'dor@gmail.com',
      date: '08/04/1999',
      phone: '0526854784',
    },
    {
      name: 'Igal Iva',
      email: 'igal@gmail.com',
      date: '31/08/1997',
      phone: '0525487485',
    },
    {
      name: 'Liron david',
      email: 'liron@gmail.com',
      date: '20/08/1997',
      phone: '0535498521',
    },
    {
      name: 'Yarin Nahum',
      email: 'yarin@gmail.com',
      date: '10/07/1996',
      phone: '058654127',
    },
    {
      name: 'Lior Nhaman',
      email: 'lior@gmail.com',
      date: '19/07/1998',
      phone: '057846985',
    },
    {
      name: 'Tomer Mizrahi',
      email: 'tomer@gmail.com',
      date: '08/08/1997',
      phone: '0569874124',
    },
    {
      name: 'Tehila Hasid',
      email: 'tehila@gmail.com',
      date: '27/08/1998',
      phone: '05382582547',
    },
    {
      name: 'Ziv Rabin',
      email: 'ziv@gmail.com',
      date: '15/12/1996',
      phone: '053258467',
    },
    {
      name: 'Moshico Ben',
      email: 'mosh@gmail.com',
      date: '19/02/1996',
      phone: '0587469821',
    },
  ];
  searchName: string = '';

  ngOnInit(): void {}
}
