import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  recipeSelected:Recipe;
  constructor(private recipeSer: RecipeService) { }

  ngOnInit() {
   this.recipeSer.recipeSel.subscribe(
    (recipe: Recipe) => {this.recipeSelected=recipe;
      console.log(` recipe from recipe component ${JSON.stringify(recipe)}`);
    }
   );
  }

 }
