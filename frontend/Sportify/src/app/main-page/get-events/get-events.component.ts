import { Component, OnInit, Pipe } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { Event } from '../../model/event';
import { FilterEventnamePipe } from '../filter-eventname.pipe';

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
    .subscribe(data => {
      console.log(data);
      this.events = data;
    });
  }

  applyEvent(event: Event){
      this.getEvents.postApplyEvent(event._id,{}).subscribe();
      event.applied = true;
  }

  unApplyEvent(event: Event){
    this.getEvents.postUnApplyEvent(event._id,{}).subscribe();
    event.applied = false;
  }


  sortAsc(){
    for(let i = 0; i < this.events.length - 1; i++){
      for(let j = 0; j < this.events.length - i - 1; j++){
        if(this.events[j].limit < this.events[j+1].limit){
          let tmp = this.events[j];
          this.events[j] = this.events[j+1];
          this.events[j+1] = tmp;
        }
      }
    }
  }

  
  sortDesc(){
    for(let i = 0; i < this.events.length - 1; i++){
      for(let j = 0; j < this.events.length - i - 1; j++){
        if(this.events[j].limit > this.events[j+1].limit){
          let tmp = this.events[j];
          this.events[j] = this.events[j+1];
          this.events[j+1] = tmp;
        }
      }
    }
  }


}
