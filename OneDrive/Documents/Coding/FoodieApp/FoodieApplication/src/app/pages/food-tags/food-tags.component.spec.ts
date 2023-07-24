import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTagsComponent } from './food-tags.component';

describe('FoodTagsComponent', () => {
  let component: FoodTagsComponent;
  let fixture: ComponentFixture<FoodTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
