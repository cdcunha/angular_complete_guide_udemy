import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

//instead using providedIn: 'root', the service is in providers on app.module.ts 
@Injectable()
export class RecipeService {
  //The Eventemitter is not necessary anymore
  //recipeSelected = new EventEmitter();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(index: number){
    return this.recipes[index];
  }

  getRecipes() {
    //Use slice to pass a copy of array instead of the reference. So, if the array is modified outside this class will not affect the array here
    return this.recipes.slice();
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
