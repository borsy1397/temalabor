import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GetdataService } from '../../getdata.service';
import { Event } from '../../model/event';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  
  event2: Event;


  constructor(
    private route: ActivatedRoute,
    private getDataService: GetdataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.getDataService.getEventDetail(id)
      .subscribe(data => this.event2 = data[0]);
  }

  goBack(): void {
    this.location.back();
  }

}
