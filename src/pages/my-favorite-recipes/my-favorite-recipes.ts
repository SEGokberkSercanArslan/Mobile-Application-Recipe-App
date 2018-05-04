import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-favorite-recipes',
  templateUrl: 'my-favorite-recipes.html',
})
export class MyFavoriteRecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoriteRecipesPage');
  }

}
