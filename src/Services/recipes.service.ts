export class RecipesService{
  private recipes: {title: string}[] = [];

  addRecipe(recipe: {title: string}){
    this.recipes.push(recipe);
  }
  getRecipes(){
    return this.recipes.slice();
  }
}
