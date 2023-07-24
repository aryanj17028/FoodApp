import { Component, OnInit } from '@angular/core';
import { FoodWheelService } from '../../food-wheel.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private service:FoodWheelService) { }

  foodData: any;


  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
