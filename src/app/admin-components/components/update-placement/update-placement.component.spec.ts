import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacementComponent } from './update-placement.component';

describe('UpdatePlacementComponent', () => {
  let component: UpdatePlacementComponent;
  let fixture: ComponentFixture<UpdatePlacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlacementComponent]
    });
    fixture = TestBed.createComponent(UpdatePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
