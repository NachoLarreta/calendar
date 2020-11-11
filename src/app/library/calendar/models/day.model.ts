import {Category} from '../../../models/category.model';
import {Week} from './week.model';

export class Day {

  numberOfDay: number;
  categories: Array<Category>;
  week: Week;
  numberOfWeekDay: number;

  constructor(week: Week) {
    this.categories = new Array<Category>();
    this.week = week;
  }

}
