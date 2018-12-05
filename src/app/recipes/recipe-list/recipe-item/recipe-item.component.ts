import {
  Component
  , OnInit
  , Input
  , Output
  , EventEmitter
} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() showRecipe: Recipe;
  @Output() recipeDetails = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  sendDetails() {
    console.log(`clicked item`);
    this.recipeDetails.emit();
  }
}
