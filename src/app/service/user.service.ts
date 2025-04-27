import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api.response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly serverUrl: string = 'http://localhost:8080/v1/';

  constructor(private http: HttpClient) {}

  users$ = (name: string = '',page: number = 0, size: number = 10): Observable<ApiResponse<Page>>=>
    this.http.get<any>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`);

  // getUsers(
  //   name: string = '',
  //   page: number = 0,
  //   size: number = 10
  // ): Observable<any> {
  //   return this.http.get<any>(
  //     `${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`
  //   );
    
  // }
}
