import { TestBed } from '@angular/core/testing';

import { UpdateValuesService } from './update-values.service';

describe('UpdataValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateValuesService = TestBed.get(UpdateValuesService);
    expect(service).toBeTruthy();
  });
});
