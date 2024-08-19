import { TestBed } from '@angular/core/testing';

import { CreatedComponentsService } from './created-components.service';

describe('CreatedComponentsService', () => {
  let service: CreatedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
