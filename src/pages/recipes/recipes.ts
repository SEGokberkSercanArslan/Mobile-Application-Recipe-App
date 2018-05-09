import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'recipes.html'
})
export class RecipesPage {

    constructor(public navCtrl: NavController, public params:NavParams) {

    }

}
