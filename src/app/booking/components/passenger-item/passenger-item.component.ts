import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { first } from 'rxjs';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.scss'],
})
export class PassengerItemComponent implements OnInit {
  public bookingForm!: FormGroup;
  public passengerList: string[] = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private ticketsFacade: TicketsFacade
  ) {}

  public ngOnInit(): void {
    this.ticketsFacade.passengers$.pipe(first()).subscribe((passengers) => {
      const { adult, child, infant } = passengers;
      const repeatAdult = Array(adult).fill('adult');
      const repeatChild = Array(child).fill('child');
      const repeatInfant = Array(infant).fill('infant');
      this.passengerList.push(...repeatAdult, ...repeatChild, ...repeatInfant);
    });
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

  public locationBack(): void {
    this.location.back();
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
