import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { TicketsFacade } from '../../services/tickets-facade.service';
import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.scss'],
})
export class DestinationInfoComponent implements OnInit, OnDestroy {
  @Input() public isMultipleWay!: boolean;
  @Input() public form!: FormGroup;
  @Input() public formControlStartDate!: FormControl;
  @Input() public formControlEndDate!: FormControl;
  @Input() public formControlPassengers!: FormControl;

  public subscription = new Subscription();

  constructor(private ticketsFacade: TicketsFacade) {}

  public writePassengers(passengers: Passenger): void {
    this.formControlPassengers.setValue(passengers);
    this.ticketsFacade.addPassengers(passengers);
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.formControlStartDate.valueChanges
        .pipe(
          tap((startDate) => {
            this.ticketsFacade.addDateToOnSearch(startDate);
          })
        )
        .subscribe()
    );
    this.subscription.add(
      this.formControlEndDate.valueChanges
        .pipe(
          tap((endDate) => {
            this.ticketsFacade.addDateFromOnSearch(endDate);
          })
        )
        .subscribe()
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
