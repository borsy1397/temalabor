import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { GetdataService } from '../../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  routerLinkLogin = "/login";

  newUser: User = {
    username: "",
    firstname:  "",
    lastname: "",
    password: "",
    email: ""
  }

  submitted = false;

  /*
   An HttpClient method does not begin its HTTP request until you call subscribe()
   on the observable returned by that method. This is true for all HttpClient methods.
  */

  onSubmit(){
    this.sendDataService.postDataRegister(this.newUser).subscribe( user => {
      console.log(user);
    });
    this.submitted = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  constructor(
    private sendDataService: GetdataService,
    private router: Router
    ) {}

  ngOnInit() {
  }

}
