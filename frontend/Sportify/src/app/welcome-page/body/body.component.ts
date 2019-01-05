
import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  submitted = false;
  routerLinkLogin = "/login";
  routerLinkSignUp = "/signup";
  routerLinkHome = "/home";
 
  constructor(private getdataservice: GetdataService) { }

  

  hiddenButtons(){
    if(!this.submitted){
      this.submitted = true;
    }
  }

  ngOnInit() {
  }

}
