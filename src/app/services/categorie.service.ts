import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Category} from '../models/category.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategorieService {

  categories: BehaviorSubject<Array<Category>>;

  constructor() {
    const categories: Array<Category> = new Array<Category>();
    const vacationCategory: Category = new Category();
    vacationCategory.name = 'vacation';
    vacationCategory.id = uuidv4();
    const workCategory: Category = new Category();
    workCategory.name = 'work';
    workCategory.id = uuidv4();
    categories.push(vacationCategory);
    categories.push(workCategory);
    this.categories = new BehaviorSubject<Array<Category>>(categories);
  }

  addNewCategory(name: string) {
    const categories: Array<Category> = this.categories.value;
    categories.push({id: uuidv4(), name});
    this.categories.next(categories);
  }

}
