import {Day} from './day.model';
import {Month} from './month.model';

export class Week {

  month: Month;
  days: Array<Day>;

  constructor(month: Month) {
    this.days = new Array<Day>();
    this.month = month;
  }


}
