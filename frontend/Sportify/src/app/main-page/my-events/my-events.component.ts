import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  events: Event[];

  constructor(private getEvents: GetdataService) { }

  ngOnInit() {

    this.getEvents.getMyEvents()
    .subscribe(data => {
      this.events = data;
      console.log(data);
    });
  }



}
