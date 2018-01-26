import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user: any;
  error_flag: boolean;

  constructor(
        public githubService: GithubDataService
  ) { }

  ngOnInit() {
    this.user = this.githubService.getUser();

    if (this.user === undefined) {
      this.error_flag = true;
    }
  }

}
