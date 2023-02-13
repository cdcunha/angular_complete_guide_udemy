import { Component, OnInit } from '@angular/core';
//The Eventemitter is not necessary anymore on the RecipeService
//import { Recipe } from './recipe.model';
//import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //The Eventemitter is not necessary anymore
  //selectedRecipe: Recipe;

  //The Eventemitter is not necessary anymore
  //constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    //The Eventemitter is not necessary anymore
    //this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );    
  }
}
