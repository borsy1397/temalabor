import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  routerLinkCreate = "/home/create";
  routerLinkEvents = "/home/events";
  routerLinkMyEvents = "/home/myevents";
  routerLinkScoreboard = "/home/scoreboard";
  routerLinkProfile = "/home/profile";

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
