import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunListingComponent } from './run-listing.component';

describe('RunListingComponent', () => {
  let component: RunListingComponent;
  let fixture: ComponentFixture<RunListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
