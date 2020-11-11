import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Appointment} from '../models/appointment.model';

@Injectable()
export class AppointmentService {

  appointments: BehaviorSubject<Array<Appointment>>;

  constructor() {
    this.appointments = new BehaviorSubject<Array<Appointment>>(null);
  }

}
