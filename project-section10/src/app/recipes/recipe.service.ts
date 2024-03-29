import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

//instead using providedIn: 'root', the service is in providers on app.module.ts 
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test A', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient("Meat", 1),
        new Ingredient("Franch Fries", 20)
      ]),
    new Recipe(
      'Another Test Recipe', 
      'This is another simply a test B', 
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Life_In_Recipes.png',
      [
        new Ingredient("Buns", 1),
        new Ingredient("Meat", 1)
      ]) 
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    //Use slice to pass a copy of array instead of the reference. So, if the array is modified outside this class will not affect the array here
    return this.recipes.slice();
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
