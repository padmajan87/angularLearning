import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';
export class ShoppingListService{
   private ingredients: Ingredient[] = [
        new Ingredient('apple',10)
        ,new Ingredient('bread',2)
      ];
    
      @Output() ingChanged = new EventEmitter<Ingredient[]>();

      onAddingIng(newIng : Ingredient){
        this.ingredients.push(newIng);
        this.ingChanged.emit(this.ingredients.slice());
      }

      onAddingIngredients(ings : Ingredient[]){
        this.ingredients.push(...ings);
        this.ingChanged.emit(this.ingredients.slice());
      }

      getIngredients(){
         return this.ingredients.slice();
      }

}