import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  users: User[];

  constructor(private dataService: GetdataService) { }

  ngOnInit() {

    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      this.sortUsers();
    });

  }

  sortUsers() {

    for (let i = 0; i < this.users.length - 1; i++) {
      for (let j = 0; j < this.users.length - i - 1; j++) {
        if (this.users[j].points < this.users[j + 1].points) {
          let tmp = this.users[j];
          this.users[j] = this.users[j + 1];
          this.users[j + 1] = tmp;
        }
      }
    }

  }


}
