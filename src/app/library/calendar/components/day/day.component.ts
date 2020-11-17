import {Component, Input} from '@angular/core';
import {Day} from '../../models/day.model';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  @Input()
  day: Day;

}
