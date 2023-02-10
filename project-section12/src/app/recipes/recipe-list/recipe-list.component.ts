import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // This event is not necessary, because I'm using the Service cross-component communication instead of a event
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor (private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // This method is not necessary, because I'm using the Service cross-component communication instead of a event
  // onSelectedRecipe(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
