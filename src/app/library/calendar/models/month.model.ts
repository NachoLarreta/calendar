import {Week} from './week.model';
import {Year} from './year.model';
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';

export class Month {

  name: string;
  year: Year;
  numberOfDays: number;
  weeks: Array<Week>;
  private _numberOfMonth: number;

  constructor(year: Year) {
    this.weeks = new Array<Week>();
    this.year = year;
  }

  set numberOfMonth(month: number) {
    this._numberOfMonth = month;
    switch (month) {
      case 0:
        this.name = 'january';
        this.numberOfDays = 31;
        break;
      case 1:
        this.name = 'february';
        dayjs.extend(isLeapYear);
        const leapYear: boolean = dayjs(`${this.year.numberOfYear}-01-01`).isLeapYear();
        if (leapYear) {
          this.numberOfDays = 29;
        } else {
          this.numberOfDays = 28;
        }
        break;
      case 2:
        this.name = 'march';
        this.numberOfDays = 31;
        break;
      case 3:
        this.name = 'april';
        this.numberOfDays = 30;
        break;
      case 4:
        this.name = 'may';
        this.numberOfDays = 31;
        break;
      case 5:
        this.name = 'june';
        this.numberOfDays = 30;
        break;
      case 6:
        this.name = 'july';
        this.numberOfDays = 31;
        break;
      case 7:
        this.name = 'august';
        this.numberOfDays = 31;
        break;
      case 8:
        this.name = 'september';
        this.numberOfDays = 30;
        break;
      case 9:
        this.name = 'october';
        this.numberOfDays = 31;
        break;
      case 10:
        this.name = 'november';
        this.numberOfDays = 30;
        break;
      case 11:
        this.name = 'december';
        this.numberOfDays = 31;
        break;
    }
  }

  get numberOfMonth(): number {
    return this._numberOfMonth;
  }
}
