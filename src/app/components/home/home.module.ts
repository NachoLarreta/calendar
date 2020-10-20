import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {CalendarModule} from '../../library/calendar/calendar.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
