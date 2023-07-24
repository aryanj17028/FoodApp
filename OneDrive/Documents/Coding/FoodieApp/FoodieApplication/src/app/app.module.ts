import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FoodListComponent } from './pages/foodlist/food-list/food-list.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FoodWheelComponent } from './pages/food-wheel/food-wheel.component';
import { FoodTagsComponent } from './pages/food-tags/food-tags.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
       FoodListComponent,
       NavbarComponent,
       FoodWheelComponent,
       FoodTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
