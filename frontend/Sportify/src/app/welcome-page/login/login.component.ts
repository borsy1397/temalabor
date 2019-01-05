import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private sendDataService: GetdataService,
    private router: Router) { }

  routerLinkHome = "/home";
  routerLinkSignUp = "/signup";

  loginUser: User = {
    username: "",
    password: "",
    firstname:  "",
    lastname: "",
    email: "",
    limit: 0,
    description: "",
    points: 0
  }

  incorrect = false;

  ngOnInit() {
  }

  sendData(){
    this.sendDataService.postDataLogin(this.loginUser).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home/events']);
    },
      err => {
        if(err !== null){
          console.log(err.error);
          this.incorrect = true;
      }
    });
  }

  incorrect2() {
    return this.incorrect;
  }

  onSubmit() {
    this.sendData();
  }

}
