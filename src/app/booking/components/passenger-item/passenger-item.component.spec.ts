import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerItemComponent } from './passenger-item.component';

describe('PassengerItemComponent', () => {
  let component: PassengerItemComponent;
  let fixture: ComponentFixture<PassengerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassengerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
