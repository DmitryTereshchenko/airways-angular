import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  public bookingForm!: FormGroup;
  public passengerList = ['adult', 'child', 'child', 'infant'];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.bookingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      countryCode: ['', [Validators.required]],
      passengers: this.fb.array([]),
    });
  }

  public onSubmit(): void {
    const { controls } = this.bookingForm;

    if (this.bookingForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      return;
    }

    console.log(this.bookingForm.value);
  }
}
