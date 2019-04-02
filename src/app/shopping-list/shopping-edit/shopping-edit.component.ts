import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  shopForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(4)])
   ,amount: new FormControl('',[Validators.required, Validators.minLength(4)])
   });

   shopFormDyn = new FormGroup({
     ingredients_Form : new FormArray([
       new FormGroup({
        name: new FormControl('',[Validators.required, Validators.minLength(4)])
        ,amount: new FormControl('',[Validators.required, Validators.minLength(4)])
       })
     ])
   });

   get ingredientsForm(){
     return this.shopFormDyn.get('ingredients_Form') as FormArray;
   }

   addFormElement(){
     this.ingredientsForm.push(
       new FormGroup({
        name: new FormControl('',[Validators.required, Validators.minLength(4)])
        ,amount: new FormControl('',[Validators.required, Validators.minLength(4)])
       })
     );
   }     

   removeFormElement(index){
      this.ingredientsForm.removeAt(index);
   }

 ingredients: Ingredient[]=[];

  constructor(private shopListSer: ShoppingListService
    ,private fb: FormBuilder) { }

  ngOnInit() {
    this.ingredients = this.shopListSer.getIngredients();
    this.shopListSer.ingChanged.subscribe(
      (ingredients: Ingredient[])=>{ this.ingredients = ingredients;}
    );
  }

  onAddingIng(){
    console.log(` Lets c : ${JSON.stringify(this.ingredientsForm.value)}`);
       
    const newIngredient:Ingredient[]=[];    
    newIngredient.push(...this.ingredientsForm.value);    
    this.shopListSer.onAddingIngredients(newIngredient);     
  }
}
