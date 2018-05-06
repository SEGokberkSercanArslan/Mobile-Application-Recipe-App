import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {StageService} from "../../Services/stage.service";
import {StageObject} from "../../objects/stageObject";

/**
 * Generated class for the AddStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stage',
  templateUrl: 'add-stage.html',
})
export class AddStagePage implements OnInit{

  private recipeTitle:string;

  constructor(private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams/*,public stageService:StageService*/) {

  }

  addStage(duration:string,procedure:string,title:string){
    /*this.stageService.addStage(new StageObject(this.recipeTitle,title,duration,procedure));*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStagePage');
  }

  ngOnInit(){
    this.recipeTitle = this.navParams.get("recipeTitle");
    console.log(this.recipeTitle);
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: " "+this.recipeTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
