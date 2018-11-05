import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sendDataService: GetdataService) { }

  routerLinkHome = "/home";
  routerLinkSignUp = "/signup";

  loginUser: User = {
    username: "",
    password: "",
    firstname:  "",
    lastname: "",
    email: ""
  }

  ngOnInit() {
  }

  sendData(){
    this.sendDataService.postDataLogin(this.loginUser).subscribe( user => {
      console.log(user);
    });
  }

}
