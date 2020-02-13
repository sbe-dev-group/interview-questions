import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDisplayComponent } from './reservation-display.component';

describe('ReservationDisplayComponent', () => {
  let component: ReservationDisplayComponent;
  let fixture: ComponentFixture<ReservationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
