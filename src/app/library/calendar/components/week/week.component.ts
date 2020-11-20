import {Component, Input} from '@angular/core';
import {Week} from '../../models/week.model';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {

  @Input()
  week: Week;
  @Input()
  showDay: boolean;

  Arr = Array;

}
