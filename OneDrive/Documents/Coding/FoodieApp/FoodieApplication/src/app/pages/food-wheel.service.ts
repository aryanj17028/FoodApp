import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodWheelService {

  constructor() { }
  
 
 
  foodDetails = [
    {
      id:1,
      restaurantName: 'Carrabas',
      tags: ['date-night', 'expensive', 'leftovers'],
      style: 'Italian'
      
    },
    {
      id:2,
      restaurantName: 'Taco Norteno',
      tags: ['cheap'],
      style: 'Mexican'
      
    },
    {
      id:3,
      restaurantName: 'Cilantro',
      tags: [ 'expensive', 'leftovers'],
      style: 'Indian'
     
    },
    {
      id:4,
      restaurantName: 'Gurus',
      tags: [ 'expensive', 'leftovers', 'date-night'],
      style: 'Indian'
     
    },
    {
      id:5,
      restaurantName: 'Firehouse Subs',
      tags: [ 'cheap'],
      style: 'Fast Food'
     
    },
    {
      id:6,
      restaurantName: 'Bulgogi House',
      tags: [ 'expensive', 'All you can eat'],
      style: 'Asian'
     
    },
    {
      id:7,
      restaurantName: 'Chipotle',
      tags: [ 'leftovers', 'cheap'],
      style: 'Mexican'
     
    },
    {
      id:7,
      restaurantName: 'Hibachi Express',
      tags: [ 'leftovers', 'cheap'],
      style: 'Asian'
     
    },
    {
      id:7,
      restaurantName: 'Aji Hibachi',
      tags: [ 'leftovers', 'expensive', 'date-night'],
      style: 'Asian'
     
    },
    {
      id:7,
      restaurantName: 'Chick fil-ay',
      tags: [  'cheap'],
      style: 'Fast Food'
     
    },
    {
      id:7,
      restaurantName: 'Just Love',
      tags: [ 'expensive', 'brunch'],
      style: 'Diner'
     
    },
    
    
  ]

   tagList = this.foodDetails.map((food: { tags: any; }) => food.tags)
  
}

export class Restaurant{
  id: number;
  restaurantName:string;
  tags: Array<string>;
  style: string;
 constructor(  id: number,
  restaurantName:string,
  tags: Array<string>,
  style: string
 ){
  this.id = id;
  this.restaurantName = restaurantName;
  this.tags = tags;
  this.style = style;
 }
 
}