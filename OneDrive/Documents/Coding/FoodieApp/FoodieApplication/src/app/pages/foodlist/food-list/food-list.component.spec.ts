import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';
import { FoodWheelService } from '../../food-wheel.service';
import { FoodWheelComponent } from '../../food-wheel/food-wheel.component';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
