
export class RecipeObject {

  protected recipeObjectCollection: RecipeObject[] = [] ;
  title: string;

  addNewRecipe(title:string,stage:Stage[]){
    this.recipeObjectCollection.push()
  }


}

export class Stage{

  private stageTitle:string;
  private procedure:string;
  private duration:string;

}
