import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddingPage} from "../adding/adding";
import {RecipesService} from "../../Services/recipes.service";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAjZUZc20kfJb5sGu8-pGLiM2cXOL-uDRk",
  authDomain: "cook-organizer-app-se380.firebaseapp.com",
  databaseURL: "https://cook-organizer-app-se380.firebaseio.com",
  projectId: "cook-organizer-app-se380",
  storageBucket: "cook-organizer-app-se380.appspot.com",
  messagingSenderId: "315733408986"
};
firebase.initializeApp(config);

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
