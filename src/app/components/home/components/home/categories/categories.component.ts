import { Component } from '@angular/core';
import {AppointmentService} from '../../services/calendar.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(public calendarService: AppointmentService) {
  }

}
