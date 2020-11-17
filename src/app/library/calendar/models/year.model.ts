import {Month} from './month.model';

export class Year {

  numberOfYear: number;
  months: Array<Month>;

  constructor() {
    this.months = new Array<Month>();
  }

}
