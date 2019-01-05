import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './model/address';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {



  constructor(private http: HttpClient) { }

  getAddressFromCoordinates(coord): Observable<Address>{
    return this.http.get<Address>("https://maps.googleapis.com/maps/api/geocode/json?latlng="+coord+"&key=apikeyishere");
  }

}
