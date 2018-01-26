import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubDataService {

  current_user: any;

  constructor(
    public http: HttpClient
  ) { }

  searchUser(userName) {
    return this.http.get<Observable<any>>(`https://api.github.com/users/${userName}`);
  }

  storeUser(user) {
      this.current_user = user;
  }

  getUser() {
    return this.current_user;
  }
}
