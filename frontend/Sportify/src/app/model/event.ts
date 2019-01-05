export class Event{
    _id: string;
    eventname: string;
    local: string; // where the sport event is taken place
    date: Date; // when
    limit: number;
    latitude: number;
    longitude: number;
    type: string; // which sport
    organizer: string;
    member: string;
    applied: boolean;
}
