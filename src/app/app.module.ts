import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateService} from './library/translate/services/translate.service';
import {HttpClientModule} from '@angular/common/http';
import {CategorieService} from './services/categorie.service';
import {UserService} from './services/user.service';
import {AppointmentService} from './services/appointment.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    TranslateService,
    CategorieService,
    UserService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
