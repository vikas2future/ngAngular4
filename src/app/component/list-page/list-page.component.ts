import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { EntriesService } from '../../services/entries-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent implements OnInit {
  lstRecords: any = [];

  constructor(private http: HttpClient, private entriesService: EntriesService) {

  }

  ngOnInit() {

    this.http.get('/users').subscribe(data => {
      this.lstRecords = data;
      this.entriesService.entries = data;
    });
  }

  deleteEntry = (entry, index) => {
    this.http.delete('/user/' + entry._id).subscribe(res => {
      console.log(res);
      this.entriesService.deleteEntry(index);
    });
  }

}
