import { TestBed } from '@angular/core/testing';

import { SelfInstallTutorialServiceService } from './self-install-tutorial-service.service';

describe('SelfInstallTutorialServiceService', () => {
  let service: SelfInstallTutorialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfInstallTutorialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
