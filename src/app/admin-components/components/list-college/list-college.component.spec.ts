import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollegeComponent } from './list-college.component';

describe('ListCollegeComponent', () => {
  let component: ListCollegeComponent;
  let fixture: ComponentFixture<ListCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCollegeComponent]
    });
    fixture = TestBed.createComponent(ListCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
