import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {UserService} from "../../Services/user.service";
import {RecipeListPage} from "../recipe-list/recipe-list";
import {TabsPage} from "../tabs/tabs";

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
    for(let i=0;i<this.userCollection.getCollection().length;i++){
      if(this.currentUser.username == this.userCollection.getCollection()[i].getUsername()){
        if (this.currentUser.password == this.userCollection.getCollection()[i].getPassword()){
          this.navCtrl.push(TabsPage);
        }
        else {
          //alert here
        }
      }
    }
  }

}
