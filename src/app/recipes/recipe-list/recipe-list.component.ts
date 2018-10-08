import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test, to see if it will show up',
    'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png'),
    new Recipe('A Test Recipe', 'This is just a test, to see if it will show up',
    'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
