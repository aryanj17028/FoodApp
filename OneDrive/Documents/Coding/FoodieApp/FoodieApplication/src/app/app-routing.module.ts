import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { FoodListComponent } from './pages/foodlist/food-list/food-list.component';
import { FoodWheelComponent } from './pages/food-wheel/food-wheel.component';
import { FoodTagsComponent } from './pages/food-tags/food-tags.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'FoodList', component:FoodListComponent},
  {path: 'FoodWheel',component:FoodWheelComponent},
  {path: 'FoodTags', component:FoodTagsComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
