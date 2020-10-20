import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

  user: BehaviorSubject<User>;

  constructor() {
    this.user = new BehaviorSubject<User>(null);
  }

}
