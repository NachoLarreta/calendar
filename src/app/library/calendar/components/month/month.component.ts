import {Component, Input} from '@angular/core';
import {Month} from '../../models/month.model';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {

  @Input()
  month: Month;

  Arr = Array;

  constructor (public calendarService: CalendarService) {
  }

}
