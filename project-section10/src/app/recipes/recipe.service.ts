import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test A', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is another simply a test B', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Life_In_Recipes.png') 
  ]

  constructor() { }

  getRecipes() {
    //Use slice to pass a copy of array instead of the reference. So, if the array is modified outside this class will not affect the array here
    return this.recipes.slice();
  }
}
