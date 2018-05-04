import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addRecipe()
  {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

}
