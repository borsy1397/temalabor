import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit {

  events: Event[];


  constructor(private getEvents: GetdataService) { }

  ngOnInit() {
    this.getEvents.getEvents()
    .subscribe(data => this.events = data);
  }

  selectEvent(){
    
  }

}
