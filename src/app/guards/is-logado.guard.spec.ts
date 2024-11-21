import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLogadoGuard } from './is-logado.guard';

describe('isLogadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLogadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
