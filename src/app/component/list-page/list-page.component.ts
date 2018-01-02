<<<<<<< HEAD
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { EntriesService } from '../../services/entries-service.service';
=======
import { Component, ViewEncapsulation } from '@angular/core';
import {ApiService} from '../../api-service.service';
>>>>>>> 194a547f4f3cdce8895a7244c858096dce322639

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListPageComponent {
lstRecords: any = [];
showList = false;

  constructor(private apiService: ApiService) {
    this.apiService.getAllUserRecords().subscribe((data) => {
      console.log(data);
      this.lstRecords = data;
      this.lstRecords.length > 0 ? this.showList = true : this.showList = false;
    });
  }

  deleteUser(id) {
    this.apiService.deleteUserRecord(id).subscribe((response) => console.log(response));
  }

  updateUser(id, updatedRecord) {
    this.apiService.updateUserRecord(id, updatedRecord).subscribe((response) => console.log(response));
  }
}
