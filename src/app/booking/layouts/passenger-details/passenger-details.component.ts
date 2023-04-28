import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  public bookingForm!: FormGroup;
  public passengerList = ['adult', 'child', 'child', 'infant'];
  constructor(private location: Location) {}
  public locationBack(): void {
    this.location.back();
  }
  public ngOnInit(): void {
    this.bookingForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      // desc: new FormControl('', [Validators.maxLength(255)]),
      // img: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      // linkVideo: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      // creationDate: new FormControl('', [Validators.required, DateValidators.checkDate]),
    });
  }
}
