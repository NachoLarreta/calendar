import { Component } from '@angular/core';
import {CategorieService} from '../../../../../services/categorie.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(public categorieService: CategorieService) {
  }

}
