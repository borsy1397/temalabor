import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Event } from './model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }


  // kell majd egy pipe meg egy catcherror, es ez egy observablet returnol vissza

    /*
   An HttpClient method does not begin its HTTP request until you call subscribe()
   on the observable returned by that method. This is true for all HttpClient methods.
  */


 getEventDetail(eventid: string): Observable<Event> {
  //return of(HEROES.find(hero => hero.id === id));
  return this.http.get<Event>("http://sportify.westeurope.cloudapp.azure.com:3000/event/" + eventid);
}

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>("http://sportify.westeurope.cloudapp.azure.com:3000/event");
  }
  postDataRegister(data){
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/user/register", data);
  }

  postDataEvent(data){
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/event", data);
  }

  postDataLogin(data){
    return this.http.post("http://sportify.westeurope.cloudapp.azure.com:3000/user/login", data);
  }


}
