import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgetPasswordPage} from "../forget-password/forget-password";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log(this.currentUser);
  }

}
