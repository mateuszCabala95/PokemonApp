import { TestBed } from '@angular/core/testing';

import { MainPageService } from '../../Services/main-page.service';

describe('MainPageService', () => {
  let service: MainPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
