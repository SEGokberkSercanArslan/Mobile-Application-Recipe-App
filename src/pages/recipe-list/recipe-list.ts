import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddingPage} from "../adding/adding";

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateAddRecipe() {
    this.navCtrl.push(AddingPage);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

}
