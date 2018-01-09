import { Component, ViewEncapsulation } from '@angular/core';
import {ApiService} from '../../api-service.service';

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
      this.apiService.setEntries(data);
      this.lstRecords = this.apiService.entries;
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
