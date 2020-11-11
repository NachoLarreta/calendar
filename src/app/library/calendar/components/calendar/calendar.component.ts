import {Component} from '@angular/core';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent {

  constructor(public calendarService: CalendarService) {
  }

}
