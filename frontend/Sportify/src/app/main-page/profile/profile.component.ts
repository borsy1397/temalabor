import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  users: User[];
  rank: number;

  constructor(private profile: GetdataService) { }

  ngOnInit() {

    this.profile.getLoggedInUser().subscribe(data => {
      this.user = data[0];
    });

    this.profile.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      this.sortAsc();
    })
  }

  
  sortAsc(){
    for(let i = 0; i < this.users.length - 1; i++){
      for(let j = 0; j < this.users.length - i - 1; j++){
        if(this.users[j].points < this.users[j+1].points){
          let tmp = this.users[j];
          this.users[j] = this.users[j+1];
          this.users[j+1] = tmp;
        }
      }
    }

    this.findRank();
  }

  findRank() {
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].username == this.user.username){
        this.rank = i+1;
      }
    }
  }



}
