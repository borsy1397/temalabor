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

  lat: number;
  lng: number;
  main: String[];
  time: String[];
  dateFormatted: String;
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
      .subscribe(data => {
        console.log(data)
        this.event2 = data[0]
        this.lat = this.event2.latitude;
        this.lng = this.event2.longitude;   
         this.date();
      });

  }

  

  goBack(): void {
    this.location.back();
  }

  date() {
    this.dateFormatted = (this.event2.date).toString();
    this.main = this.dateFormatted.split('T');
    this.time = this.main[1].split('.');
  }
}
