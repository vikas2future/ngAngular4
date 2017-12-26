import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  apiUrl: any = '';
  constructor(private http: HttpClient) { }

  getAllUserRecords(): Observable<any> {
    return this.http.get(this.apiUrl + '/users').map((res: Response) => res);
  }

  updateUserRecord(editUserID, updatedRecord) {
    console.log(editUserID)
    return this.http.put(this.apiUrl + 'user/' + editUserID, updatedRecord).map((response: any) => response);
  }
  deleteUserRecord(deleteUserID) {
    debugger;
    return this.http.delete(this.apiUrl + 'user/' + deleteUserID).map((response: any) => response);
  }
  addUserRecord(newUser) {
    debugger;
    return this.http.post(this.apiUrl + '/user', newUser)
      .map((result: Response) => {
        return result;
      });
  }
}
