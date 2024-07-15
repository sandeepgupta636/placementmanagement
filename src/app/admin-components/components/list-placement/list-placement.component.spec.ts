import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlacementComponent } from './list-placement.component';

describe('ListPlacementComponent', () => {
  let component: ListPlacementComponent;
  let fixture: ComponentFixture<ListPlacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlacementComponent]
    });
    fixture = TestBed.createComponent(ListPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
