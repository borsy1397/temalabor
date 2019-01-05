import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { MapService } from '../../map.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  lat: number = 47.47;
  lng: number = 19;
  locationChosen = false;
  coordinates: string = "";
  selectedValue: string  = "basketball";
  today = new Date().toISOString().split('T')[0];


  submitted = false;

  createEvent: Event = {
    _id: "",
    eventname: "",
    local: "",
    date: null, 
    limit: 0,
    type: "",
    organizer: "",
    latitude: 0,
    longitude: 0,
    member: "",
    applied: true
  }

  onClick(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
    console.log(event);
    this.coordinates = `${this.lat},${this.lng}`;
    this.getAddress(this.coordinates);
  }

  constructor(
    private dataService: GetdataService,
    private mapService: MapService
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.createEvent.latitude = this.lat;
    this.createEvent.longitude = this.lng;
    this.createEvent.type = this.selectedValue;
    console.log(this.selectedValue);
    this.dataService.postDataEvent(this.createEvent).subscribe( event => {
      console.log(this.createEvent.type + "na?");
      console.log(event);
    });
    this.submitted = true;
  }

  getAddress(coord: string): void {
    const req = this.mapService.getAddressFromCoordinates(coord)
    req.subscribe(data => {
      console.log(data);
      this.createEvent.local = data.results[0].formatted_address;
      console.log(this.createEvent.local);
    });
  }

}
