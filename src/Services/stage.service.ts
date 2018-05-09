import {StageObject} from "../objects/stageObject";
import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";

@Injectable()
export class StageService{

  private stageCollection:StageObject[] = [];

  constructor(private storage: Storage){}

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
