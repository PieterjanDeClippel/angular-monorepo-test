import { TestBed } from '@angular/core/testing';

import { NgYoutubeApiService } from './ng-youtube-api.service';

describe('NgYoutubeApiService', () => {
  let service: NgYoutubeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgYoutubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
