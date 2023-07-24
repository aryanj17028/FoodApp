import { Component, OnInit } from '@angular/core';
import { FoodWheelService, Restaurant } from '../food-wheel.service';
@Component({
  selector: 'app-food-tags',
  templateUrl: './food-tags.component.html',
  styleUrls: ['./food-tags.component.css']
})
export class FoodTagsComponent implements OnInit {

  selectedFoodTag: any;
  tagsData: any;
  foodData: Array<Restaurant>;
  chosenTags:Array<Restaurant>;
  jsonChosenData: any;
 
  constructor(private service:FoodWheelService) { 
    this.chosenTags = [];
    this.foodData = this.service.foodDetails;
    this.tagsData = this.service.tagList;
  }
  ngOnInit(): void {
    

   const mergedTags = [].concat(...this.tagsData);
   this.tagsData = mergedTags;

   const uniqueArray = Array.from(new Set(this.tagsData));
   this.tagsData = uniqueArray;
   
   console.log(this.tagsData);
   
   
    
  }

  
  onSelected(value:string) {
    this.selectedFoodTag = value;
    this.tagFinder(this.selectedFoodTag);

  }
  tagFinder(value:string){
  
    // this.chosenFoodData = this.foodData.map((food: { style: string; })=>food.style==value);
    // console.log(this.chosenFoodData + " CHOSEN");
 
this.chosenTags = this.foodData.filter((food) =>
food.tags.some((tag) => tag === value)
);
  console.log(this.chosenTags);
    
}

}
