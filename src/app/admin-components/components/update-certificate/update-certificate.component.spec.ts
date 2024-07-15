import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertificateComponent } from './update-certificate.component';

describe('UpdateCertificateComponent', () => {
  let component: UpdateCertificateComponent;
  let fixture: ComponentFixture<UpdateCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCertificateComponent]
    });
    fixture = TestBed.createComponent(UpdateCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
