import { TestBed } from '@angular/core/testing';

import { ServicesComponentsService } from './services-components.service';

describe('ServicesComponentsService', () => {
  let service: ServicesComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
