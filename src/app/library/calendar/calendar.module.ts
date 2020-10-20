import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './components/calendar/calendar.component';
import {TranslateModule} from '../translate/translate.module';
import {CalendarService} from './services/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    CalendarComponent
  ],
  providers: [
    CalendarService
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
