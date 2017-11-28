import { Component, OnInit } from '@angular/core';

import { Entry } from './entry';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  entry = {};
  entries: any = [];

  constructor() { }

  ngOnInit() {
  }

  newEntry = function newEntry() {
    let newEntry: any;
    newEntry = new Entry(this.entry.firstName, this.entry.lastName, this.entry.email, this.entry.phone);

    this.entries.push(newEntry);
    this.entry = {};
    console.log(this.entries);
  };

}
