import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {CalendarModule} from '../../library/calendar/calendar.module';
import {CategoriesComponent} from './components/home/categories/categories.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule,
    MatListModule
  ],
  declarations: [
    HomeComponent,
    CategoriesComponent
  ],
  providers: []
})
export class HomeModule { }
