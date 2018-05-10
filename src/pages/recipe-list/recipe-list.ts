import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddingPage} from "../adding/adding";
import {RecipesService} from "../../Services/recipes.service";
import {RecipesPage} from "../recipes/recipes";

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {
  recipes: {title: string}[]=[];
  items: any;
  constructor(public navCtrl: NavController, private recipesService: RecipesService) {
  }

  ionViewWillEnter(){
  this.recipesService.getRecipes()
    .then(
      (recipes) => this.recipes = recipes
    );
  }

  navigateAddRecipe() {
    this.navCtrl.push(AddingPage);
  }

  viewRecipe(recipes){
    this.navCtrl.push(RecipesPage,
      {item: recipes}
    );
  }

}
