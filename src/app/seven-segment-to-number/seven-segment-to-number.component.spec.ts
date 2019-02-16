import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegmentToNumberComponent } from './seven-segment-to-number.component';

describe('SevenSegmentToNumberComponent', () => {
  let component: SevenSegmentToNumberComponent;
  let fixture: ComponentFixture<SevenSegmentToNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenSegmentToNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenSegmentToNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
