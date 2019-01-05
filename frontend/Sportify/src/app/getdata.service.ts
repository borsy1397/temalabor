import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Event } from './model/event';
import { Address } from './model/address';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  constructor(private http: HttpClient) { }


  /*
 An HttpClient method does not begin its HTTP request until you call subscribe()
 on the observable returned by that method. This is true for all HttpClient methods.
*/


  getEventDetail(eventid: string): Observable<Event> {
    return this.http.get<Event>("http://sportify.westeurope.cloudapp.azure.com:3000/event/" + eventid);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>("http://sportify.westeurope.cloudapp.azure.com:3000/event");
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://sportify.westeurope.cloudapp.azure.com:3000/user");
  }

  getMyEvents(): Observable<Event[]> {
    return this.http.get<Event[]>("http://sportify.westeurope.cloudapp.azure.com:3000/user/listevents/all");
  }

  postDataRegister(data) {
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/user/register", data);
  }

  postDataEvent(data) {
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/event", data);
  }

  postDataLogin(data) {
    return this.http.post<any>("http://sportify.westeurope.cloudapp.azure.com:3000/user/login", data);
  }

  postApplyEvent(eventid: string, data) {
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/user/apply/" + eventid, data);
  }

  postUnApplyEvent(eventid: string, data) {
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/user/unapply/" + eventid, data);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getLoggedInUser(): Observable<User> {
    return this.http.get<User>("http://sportify.westeurope.cloudapp.azure.com:3000/user/findByToken/" + localStorage.getItem('token'));
  }







}
