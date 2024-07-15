import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertificateComponent } from './add-certificate.component';

describe('AddCertificateComponent', () => {
  let component: AddCertificateComponent;
  let fixture: ComponentFixture<AddCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCertificateComponent]
    });
    fixture = TestBed.createComponent(AddCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
