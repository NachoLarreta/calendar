import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './components/calendar/calendar.component';
import {TranslateModule} from '../translate/translate.module';
import {DayComponent} from './components/day/day.component';
import {MonthComponent} from './components/month/month.component';
import {WeekComponent} from './components/week/week.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    CalendarComponent,
    DayComponent,
    MonthComponent,
    WeekComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
