import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

    user: Observable<any>;
    nickname: string;
    searchingUser: boolean;
    newMessage: string;
    showContinueBtn: boolean;
    @Output() newAppMessage: EventEmitter<any> = new EventEmitter();

    constructor(
        public githubService: GithubDataService
    ) { }

    ngOnInit() {
      this.searchingUser = false;
      this.showContinueBtn = false;
    }

    onSearch(form) {

        this.searchingUser = true;

        this.githubService.searchUser(this.nickname).subscribe( user => {
            this.user = user;
            this.githubService.storeUser(user);
            this.searchingUser = false;
            this.showContinueBtn = true;
            this.newAppMessage.emit({
              message: `We found user ${ user.login }`,
              error: false
            })
        }, error => {
          console.log(error);
          this.newAppMessage.emit({
            message: `Such user doesn't exist!`,
            error: true
          })
          this.searchingUser = false;
        });
    }

}
