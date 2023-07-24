import { Component, OnInit } from '@angular/core';
import { FoodWheelService, Restaurant } from '../food-wheel.service';

@Component({
  selector: 'app-food-wheel',
  templateUrl: './food-wheel.component.html',
  styleUrls: ['./food-wheel.component.css']
})
export class FoodWheelComponent implements OnInit {

 
  selectedFoodStyle: any;
  styleData: any;
  foodData: Array<Restaurant>;
  chosenFoodData:Array<Restaurant>;
  jsonChosenData: any;
 
  constructor(private service:FoodWheelService) { 
    this.chosenFoodData = [];
    this.foodData = this.service.foodDetails;
  }

 
 ngOnInit(): void {
   
    
    console.log(this.foodData + " This is the food data all of it");
    
   console.log(this.foodData[0].style + " The first style")
    
    this.styleData = this.foodData.map((food: { style: any; }) => food.style);
    console.log(this.styleData + " This is to see if the style data was made");
    
    const uniqueArray = Array.from(new Set(this.styleData));
   this.styleData = uniqueArray;
  }

  onSelected(value:string) {
    this.selectedFoodStyle = value;
    this.foodWheel(this.selectedFoodStyle);

  }

  foodWheel(value:string){
  
    // this.chosenFoodData = this.foodData.map((food: { style: string; })=>food.style==value);
    // console.log(this.chosenFoodData + " CHOSEN");
  this.chosenFoodData = this.foodData.filter((food) => food.style === value);
    
}

}