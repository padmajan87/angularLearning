import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  showRecipe: Recipe;
  
  constructor(private recipeSer: RecipeService) { }

  ngOnInit() {
  }

  onSendToShoppingList(){
    this.recipeSer.sendToShoppingList(this.showRecipe.ingredients);
  }

}
