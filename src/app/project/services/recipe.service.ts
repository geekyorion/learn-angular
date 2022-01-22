import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'Super Tasty Apple Pie',
      'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg',
      [
        new Ingredient('Apple', 5),
        new Ingredient('Cream', 2),
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
