import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { combineLatest, first, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { TicketData } from '../../constants/ticket-data';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { Search } from '../../../shared/models/ticket-state';
import {
  selectGetSearchDateStart,
  selectTicketsFrom,
} from '../../../store/selectors/tickets.selectors';

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
  @Input() public searchData!: Search;
  public from$ = combineLatest([
    this.store.select(selectGetSearchDateStart),
    this.store.select(selectTicketsFrom),
  ]).pipe(
    map(([date, tickets]) => {
      tickets.map((item, i) => {
        return (
          item.date.setFullYear(date.getFullYear()),
          item.date.setMonth(date.getMonth()),
          item.date.setDate(date.getDate() + this.numbersFrom[i])
        );
      });
      return tickets;
    })
  );

  private numbersFrom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

  public tickets: TicketData[] = [];

  constructor(
    public ticketsFacade: TicketsFacade,
    private cdr: ChangeDetectorRef,
    private store: Store
  ) {}

  public ngOnChanges(): void {
    this.ticketsFacade.from$
      .pipe(
        first(),
        tap((tickets) => {
          this.tickets = tickets;
          this.cdr.detectChanges();
          console.log(tickets);
        })
      )
      .subscribe();
  }

  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }

  public dispatchTicketsAndChangeVisible(): void {
    this.ticketsFacade.addTicketFlights([this.data]);
    this.isSliderVisible = !this.isSliderVisible;
  }

  public changeFlightsVisibility(): void {
    if (!this.isFlightVisible) {
      this.isFlightVisible = true;
    }
  }
}
