import { TestBed } from '@angular/core/testing';

import { FetchGithubService } from './fetch-github.service';

describe('FetchGithubService', () => {
  let service: FetchGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
