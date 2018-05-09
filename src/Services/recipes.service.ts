import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipesService{
  private recipes: {title: string}[] = [];

  constructor(private storage: Storage){}

  addRecipe(recipe: {title: string}){
    this.recipes.push(recipe);
    this.storage.set('recipes', this.recipes);
  }

  getRecipes(){
    return this.storage.get('recipes')
      .then(
        (recipes) => {
          this.recipes = recipes == null ? [] : recipes;
          return this.recipes.slice();
        }
      );
  }
}
