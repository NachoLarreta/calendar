import {Injectable} from '@angular/core';
import {Calendar} from '../models/calendar.model';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CalendarService {

  calendar: BehaviorSubject<Calendar>;

  constructor() {
    this.calendar = new BehaviorSubject<Calendar>(null);
  }

}
