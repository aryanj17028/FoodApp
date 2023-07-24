import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWheelComponent } from './food-wheel.component';

describe('FoodWheelComponent', () => {
  let component: FoodWheelComponent;
  let fixture: ComponentFixture<FoodWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
