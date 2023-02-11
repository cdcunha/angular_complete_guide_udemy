import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
//As we'll not use the onSelected method, we don't need the RecipeService
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  //Use the Service cross-component communication instead of a event
  //@Output() recipeSelected = new EventEmitter<void>();
  @Input() index: number;

  //As we'll not use the onSelected method, we don't need the RecipeService
  // constructor (private recipeService: RecipeService) {}

  //We'll not pass the item by a method anymore
  // onSelected(){
  //   //Use the Service cross-component communication instead of a event
  //   //this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
