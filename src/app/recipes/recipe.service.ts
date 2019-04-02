import { Recipe } from './recipe.model';
import { Injectable,EventEmitter,Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    @Output()
    recipeSel = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
                    'A Test Recipe'
                   ,'A Test Recipe'
                   ,'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2012/12/Year-in-Food-2012-Recipes-Feat-602x338.jpg'
                   , [new Ingredient('meat',2),
                      new Ingredient('egg',2)]
                   ),
                   new Recipe(
                    'Another Test Recipe'
                   ,'Another Test Recipe'
                   ,'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2012/12/Year-in-Food-2012-Recipes-Feat-602x338.jpg'
                   , [new Ingredient('bread',2),
                   new Ingredient('orange',2)]
                   )
            ];

    constructor(private shopSer: ShoppingListService){

    }

    getrecipes(){
        return this.recipes.slice();//returns new array exact copy of the array
    }

    onRecipeSelected(recipe: Recipe){
        this.recipeSel.emit(recipe);
      }

      sendToShoppingList(ingredient: Ingredient[])
      {
        this.shopSer.onAddingIngredients(ingredient);
      }

}