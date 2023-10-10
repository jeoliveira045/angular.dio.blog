import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSmallNewsComponent } from './latest-small-news.component';

describe('LatestSmallNewsComponent', () => {
  let component: LatestSmallNewsComponent;
  let fixture: ComponentFixture<LatestSmallNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSmallNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSmallNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
