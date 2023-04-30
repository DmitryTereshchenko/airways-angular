import { Component, OnInit } from '@angular/core';
import {
  FormArray,
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
export class PassengerDetailsComponent {
  public bookingForm!: FormGroup;
  public passengerList = ['adult', 'child', 'child', 'infant'];
  // public passengerList = ['adult'];

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      countryCode: ['', [Validators.required]],
      passengers: this.fb.array([]),
    });

    for (let i = 0; i < this.passengerList.length; i++) {
      const passengerForm = this.fb.group({
        passenger: [this.passengerList[i]],
        name: ['', [Validators.required, Validators.pattern(/^\D+$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^\D+$/)]],
        dateOfBirth: ['', [Validators.required]],
        sex: ['', [Validators.required]],
        specialAssist: [''],
      });
      (<FormArray>this.bookingForm.controls['passengers']).push(passengerForm);
    }
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

  public get passengers(): FormArray {
    return this.bookingForm.controls['passengers'] as FormArray;
  }
}
