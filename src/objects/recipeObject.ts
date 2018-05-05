

export class RecipeObject {

  protected recipeObjectCollection: RecipeObject[] = [] ;
  title: string;

  addNewRecipe(title:string,stage:Stage[]){
    this.recipeObjectCollection.push()
  }


}

export class Stage{

  private procedure:string;
  private duration:number;

}
