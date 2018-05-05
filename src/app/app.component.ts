import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../pages/my-favorite-recipes/my-favorite-recipes";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAjZUZc20kfJb5sGu8-pGLiM2cXOL-uDRk",
  authDomain: "cook-organizer-app-se380.firebaseapp.com",
  databaseURL: "https://cook-organizer-app-se380.firebaseio.com",
  projectId: "cook-organizer-app-se380",
  storageBucket: "cook-organizer-app-se380.appspot.com",
  messagingSenderId: "315733408986"
};

firebase.initializeApp(config);

const database = firebase.database();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RecipeListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

