import { TestBed } from '@angular/core/testing';

import { FoodWheelService } from './food-wheel.service';

describe('FoodWheelService', () => {
  let service: FoodWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
