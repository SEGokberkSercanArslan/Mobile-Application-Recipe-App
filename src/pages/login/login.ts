import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {UserService} from "../../Services/user.service";
import {RecipeListPage} from "../recipe-list/recipe-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  currentUser = {
    username:"",
    password:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private userCollection:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigateSignUp(){
    this.navCtrl.push(SignupPage);
  }

  pushForgetPassword(){
    this.navCtrl.push(ForgetPasswordPage);
  }

  loginAuthentication(){
    for(let i=0;i<this.userCollection.getUserCollection().length;i++){
      if(this.currentUser.username == this.userCollection.getUserCollection()[i].getUsername()){
        if (this.currentUser.password == this.userCollection.getUserCollection()[i].getPassword()){
          this.navCtrl.push(RecipeListPage);
        }
        else {
          //alert here
        }
      }
    }
  }

}
