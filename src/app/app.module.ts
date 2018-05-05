import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../pages/my-favorite-recipes/my-favorite-recipes";
import {AddingPage} from "../pages/adding/adding";
import {RecipesService} from "../Services/recipes.service";
import {AddStagePage} from "../pages/add-stage/add-stage";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    RecipeListPage,
    MyFavoriteRecipesPage,
    AddingPage,
    AddStagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    RecipeListPage,
    MyFavoriteRecipesPage,
    AddingPage,
    AddStagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, RecipesService,
  ]
})
export class AppModule {}
