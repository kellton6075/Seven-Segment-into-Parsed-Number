import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPoloGameComponent } from './marco-polo-game.component';

describe('MarcoPoloGameComponent', () => {
  let component: MarcoPoloGameComponent;
  let fixture: ComponentFixture<MarcoPoloGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPoloGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPoloGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
