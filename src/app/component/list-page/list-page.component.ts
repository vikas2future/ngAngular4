import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent implements OnInit {
lstRecords: any = [];

  constructor() { }

  ngOnInit() {

   this.lstRecords = [
  {
    "id": 1,
    "firstName": "Leanne",
    "lastName": "Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "id": 2,
    "firstName": "Ervin",
    "lastName": "Howell",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
  {
    "id": 3,
    "firstName": "Clementine",
    "lastName": "Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "id": 4,
    "firstName": "Patricia",
    "lastName": "Lebsack",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
    "website": "kale.biz"
  },
  {
    "id": 5,
    "firstName": "Chelsey",
    "lastName": "Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "website": "demarco.info"
  }
];
  }

}
