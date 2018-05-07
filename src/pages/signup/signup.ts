import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from "../../Services/user.service";
import {UserObject} from "../../objects/userObject";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {
    email:"",
    username:"",
    password:""
  };

  found:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private collection:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpUser(){
    for (let i=0;i<this.collection.getUserCollection().length;i++){
      if (this.user.username == this.collection.getUserCollection()[i].getUsername()){
        this.found = true;
        //create Alert here
        break;
      }
    }
    if (!this.found){
      this.collection.addUserToCollection(new UserObject(this.user.username,this.user.password,this.user.email));
    }
  }

}
