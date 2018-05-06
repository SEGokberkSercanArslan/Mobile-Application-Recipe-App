

export class StageObject{

  private  stageTitle:string;
  private  stageDuration:string;
  private  stageProcedure:string;
  private  recipeTitle:string;

  constructor(recipeTitle:string,stageTitle:string,stageDuration:string,stageProcedure:string){
    this.stageTitle = stageTitle;
    this.stageProcedure = stageProcedure;
    this.stageDuration = stageDuration;
    this.recipeTitle = recipeTitle;
  }

  getStageObject(){return this;}

  //Getter Methods
  getProcedure(){
    return this.stageProcedure;
  }

}
