import {Injectable} from '@angular/core';
import {Calendar} from '../models/calendar.model';
import {Month} from '../models/month.model';
import {Day} from '../models/day.model';
import {BehaviorSubject} from 'rxjs';
import {Year} from '../models/year.model';
import * as dayjs from 'dayjs';
import {Week} from '../models/week.model';

@Injectable()
export class CalendarService {

  calendar: BehaviorSubject<Calendar>;
  monthSelected: BehaviorSubject<Month>;
  daySelected: BehaviorSubject<Day>;

  constructor() {
    this.calendar = new BehaviorSubject<Calendar>(new Calendar());
    this.initCalendar();
    this.monthSelected = new BehaviorSubject<Month>(null);
    this.daySelected = new BehaviorSubject<Day>(null);
  }

  initCalendar() {
    const numberOfYear: number = dayjs().year();
    for (let i = numberOfYear - 10; i < numberOfYear + 10; i++) {
      this.loadYear(i);
    }
    const calendar: Calendar = this.calendar.value;
    const currentYear: Year = calendar.years.filter(year => year.numberOfYear === dayjs().year())[0];
    const currentMonth: Month = currentYear.months.filter(month => month.numberOfMonth === dayjs().month())[0];
    let currentDay: Day;
    for (const week of currentMonth.weeks) {
      const filterDays: Array<Day> = week.days.filter(day => day.numberOfDay === new Date().getDate());
      if (filterDays && filterDays.length > 0) {
        currentDay = filterDays[0];
      }
    }
    this.monthSelected.next(currentMonth);
    this.daySelected.next(currentDay);
  }

  nextMonth() {
    const monthSelected = this.monthSelected.value;
    if (monthSelected.numberOfMonth === 12) {
      const nextYear: Year = this.findYear(monthSelected.year.numberOfYear + 1);
      const filterMonth: Array<Month> = nextYear.months.filter(monthAux => monthAux.numberOfMonth === 1);
      if (filterMonth.length === 1) {
        this.monthSelected.next(filterMonth[0]);
      }
    } else {
      const filterMonth: Array<Month> = monthSelected.year.months.filter(
        monthAux => monthAux.numberOfMonth === monthSelected.numberOfMonth + 1);
      if (filterMonth.length === 1) {
        this.monthSelected.next(filterMonth[0]);
      }
    }
  }

  backMonth() {
    const monthSelected = this.monthSelected.value;
    if (monthSelected.numberOfMonth === 1) {
      const backYear: Year = this.findYear(monthSelected.year.numberOfYear - 1);
      const filterMonth: Array<Month> = backYear.months.filter(monthAux => monthAux.numberOfMonth === 12);
      if (filterMonth.length === 1) {
        this.monthSelected.next(filterMonth[0]);
      }
    } else {
      const filterMonth: Array<Month> = monthSelected.year.months.filter(
        monthAux => monthAux.numberOfMonth === monthSelected.numberOfMonth - 1);
      if (filterMonth.length === 1) {
        this.monthSelected.next(filterMonth[0]);
      }
    }
  }

  findYear(year: number): Year {
    const calendar: Calendar = this.calendar.value;
    const filterYear: Array<Year> = calendar.years.filter(yearAux => yearAux.numberOfYear === year);
    if (filterYear.length === 1) {
      return filterYear[0];
    } else {
      this.loadYear(year);
    }
  }

  loadYear(yearNumber: number) {
    const calendar: Calendar = this.calendar.value;
    const year: Year = new Year();
    year.numberOfYear = yearNumber;
    this.loadMonths(year);
    calendar.years.push(year);
    this.calendar.next(calendar);
  }

  loadMonths(year: Year) {
    for (let i = 0; i < 11; i++) {
      const month: Month = new Month(year);
      month.numberOfMonth = i;
      this.loadWeek(month);
      year.months.push(month);
    }
  }

  loadWeek(month: Month) {
    let week: Week = new Week(month);
    for (let i = 1; i <= month.numberOfDays; i++) {
      const weekDay: number = dayjs(`${month.year.numberOfYear}-${month.numberOfMonth}-${i}`).day();
      const day: Day = new Day(week);
      day.numberOfDay = i;
      day.numberOfWeekDay = weekDay;
      week.days.push(day);
      if (weekDay === 0) {
        month.weeks.push(week);
        week = new Week(month);
      }
    }
  }

}
