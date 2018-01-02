import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Entry } from './entry';
import { EntriesService } from '../../services/entries-service.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  entry = {};

  constructor(private http: HttpClient, private entriesService: EntriesService) { }

  ngOnInit() {
  }

  newEntry = function newEntry() {
    let newEntry: any;
    newEntry = new Entry(this.entry.firstName, this.entry.lastName, this.entry.email, this.entry.phone);

    this.http.post('/user', newEntry).subscribe(data => {
      this.entriesService.addEntry(data.data);
      this.entry = {};
    });

  };

}
