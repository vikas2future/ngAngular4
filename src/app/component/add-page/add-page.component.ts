import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Entry } from './entry';
import {ApiService} from '../../api-service.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  entry = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  newEntry = function newEntry() {
    const newEntry: any = new Entry(this.entry.firstName, this.entry.lastName, this.entry.email, this.entry.phone);
    this.apiService.addUserRecord(newEntry).subscribe((result) => console.log(result));
    this.entries.push(newEntry);
    this.entry = {};
    console.log(this.entries);
  };

}
