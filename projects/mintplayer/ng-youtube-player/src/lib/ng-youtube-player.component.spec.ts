import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgYoutubePlayerComponent } from './ng-youtube-player.component';

describe('NgYoutubePlayerComponent', () => {
  let component: NgYoutubePlayerComponent;
  let fixture: ComponentFixture<NgYoutubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgYoutubePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
