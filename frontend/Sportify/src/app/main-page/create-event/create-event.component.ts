import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  submitted = false;

  createEvent: Event = {
    eventid: "",
    eventname: "",
    local: "",
    date: "", 
    limit: "",
    sport: "",
    organizer: "",
    member: ""
  }

  constructor(private sendDataService: GetdataService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.sendDataService.postDataEvent(this.createEvent).subscribe( event => {
      console.log(event);
    });
    this.submitted = true;
  }
}
