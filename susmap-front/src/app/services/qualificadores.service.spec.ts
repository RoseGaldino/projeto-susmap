import { TestBed } from '@angular/core/testing';

import { QualificadoresService } from './qualificadores.service';

describe('QualificadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualificadoresService = TestBed.get(QualificadoresService);
    expect(service).toBeTruthy();
  });
});
