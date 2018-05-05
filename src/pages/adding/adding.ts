import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipesService} from "../../Services/recipes.service";
import {AddStagePage} from "../add-stage/add-stage";
import {DenemePage} from "../deneme/deneme";

@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {

  constructor(private  navCtrl: NavController, private recipesService: RecipesService) {}

  onAddRecipe(value: {title: string}) {
    this.recipesService.addRecipe(value);
    this.navCtrl.pop();
  }

  addNewStage(){
    this.navCtrl.push(DenemePage);
  }

}