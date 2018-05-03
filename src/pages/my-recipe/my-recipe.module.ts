import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRecipePage } from './my-recipe';

@NgModule({
  declarations: [
    MyRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(MyRecipePage),
  ],
})
export class MyRecipePageModule {}
