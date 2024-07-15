import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementComponent } from './add-placement.component';

describe('AddPlacementComponent', () => {
  let component: AddPlacementComponent;
  let fixture: ComponentFixture<AddPlacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlacementComponent]
    });
    fixture = TestBed.createComponent(AddPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
