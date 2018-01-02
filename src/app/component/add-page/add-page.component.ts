import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Entry } from './entry';
<<<<<<< HEAD
import { EntriesService } from '../../services/entries-service.service';
=======
import {ApiService} from '../../api-service.service';
>>>>>>> 194a547f4f3cdce8895a7244c858096dce322639

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
