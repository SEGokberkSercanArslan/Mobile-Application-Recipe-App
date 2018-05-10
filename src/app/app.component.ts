import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {RecipesService} from "../Services/recipes.service";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../pages/my-favorite-recipes/my-favorite-recipes";
import {AddStagePage} from "../pages/add-stage/add-stage";
import {ForgetPasswordPage} from "../pages/forget-password/forget-password";
@Component({
  templateUrl: 'app.html',
  providers: [RecipesService]
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

