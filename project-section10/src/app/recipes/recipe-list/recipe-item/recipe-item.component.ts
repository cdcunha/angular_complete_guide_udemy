import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  //Use the Service cross-component communication instead of a event
  //@Output() recipeSelected = new EventEmitter<void>();

  constructor (private recipeService: RecipeService) {}

  onSelected(){
    //Use the Service cross-component communication instead of a event
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
