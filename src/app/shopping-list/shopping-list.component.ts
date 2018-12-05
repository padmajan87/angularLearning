import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10)
    , new Ingredient('Tomatoes', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

  addIngredients(ingredient: Ingredient) {
    console.log(`Shopping List Component ${ingredient}`);
    this.ingredients.push(ingredient);
  }

}
