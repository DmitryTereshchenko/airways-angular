import { Component, Input, OnChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { loadAddTicketFlights } from '../../../store/actions/add-ticket-flight.actions';
import { TicketData } from '../../constants/ticket-data';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnChanges {
  @Input() public ticketsData!: TicketData[];
  @Input() public image!: string;
  @Input() public imageTimeTravel!: string;
  @Input() public currency!: 'EUR' | 'USA' | 'PLN' | 'RUB';
  public data: TicketData = {
    date: new Date(),
    arrivalTime: '',
    departureTimeFrom: '',
    departureTimeTo: '',
    price: {
      EUR: '',
      USA: '',
      RUB: '',
      PLN: '',
    },
    seats: 0,
    flightCode: '',
  };

  public isSliderVisible = true;

  public isFlightVisible = false;

  constructor(private store: Store) {}
  public ngOnChanges(): void {
    const [first] = this.ticketsData;
    this.data = first;
  }

  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }

  public dispatchTicketsAndChangeVisible(): void {
    this.store.dispatch(loadAddTicketFlights({ flights: [this.data] }));
    this.isSliderVisible = !this.isSliderVisible;
  }

  public changeFlightsVisibility(): void {
    if (!this.isFlightVisible) {
      this.isFlightVisible = true;
    }
  }
}
