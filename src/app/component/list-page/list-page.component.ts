import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent implements OnInit {
  lstRecords: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get('/users/').subscribe(data => {
      this.lstRecords = data;
      console.log(data);
    });
  }

}
