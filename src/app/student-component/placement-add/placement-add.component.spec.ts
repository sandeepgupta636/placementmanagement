import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementAddComponent } from './placement-add.component';

describe('PlacementAddComponent', () => {
  let component: PlacementAddComponent;
  let fixture: ComponentFixture<PlacementAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementAddComponent]
    });
    fixture = TestBed.createComponent(PlacementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
