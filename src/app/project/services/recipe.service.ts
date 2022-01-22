import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test', 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
