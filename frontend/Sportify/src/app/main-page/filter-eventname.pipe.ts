import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../model/event';

@Pipe({
  name: 'filterEventname',
  pure: false
})
export class FilterEventnamePipe implements PipeTransform {

  transform(events: Event[], term: any): any {
    if(term === undefined){
      return events;
    }

    return events.filter((event) => {
      return event.eventname.toLowerCase().includes(term.toLowerCase());
    });
  }

}
