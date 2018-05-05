import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddingPage} from "../adding/adding";
import {RecipesService} from "../../Services/recipes.service";

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  recipes: {title: string}[]=[];

  constructor(public navCtrl: NavController, private recipesService: RecipesService) {
  }

  ionViewWillEnter(){
  this.recipes = this.recipesService.getRecipes();
  }

  navigateAddRecipe() {
    this.navCtrl.push(AddingPage);
  }

}
