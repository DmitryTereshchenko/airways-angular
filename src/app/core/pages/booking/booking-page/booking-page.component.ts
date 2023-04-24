import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit {
  public bookingForm!: FormGroup;
  public passengerList = ['adult', 'child', 'child', 'infant'];

  public ngOnInit(): void {
    this.bookingForm = new FormGroup({});
  }
}
