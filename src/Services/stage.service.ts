import {StageObject} from "../objects/stageObject";


export class StageService{

  private stageCollection:StageObject[] = [];

  addStage(stage:StageObject){
    this.stageCollection.push(stage)
  }

  removeStage(stage:StageObject) {
    const position = this.stageCollection.findIndex((stageRemove: StageObject) => {
      return stageRemove.getProcedure() == stage.getProcedure()
    });
     this.stageCollection.splice(position,1);
  }

  getStageCollection(){
    return this.stageCollection.slice();
  }

}
