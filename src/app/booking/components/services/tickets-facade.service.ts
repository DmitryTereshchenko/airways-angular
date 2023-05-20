import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { Passengers } from '../../../shared/models/ticket-state';
import {
  loadAddDateFrom,
  loadAddDateTo,
  loadAddFrom,
  loadAddTo,
  loadPassengers,
  loadWay,
} from '../../../store/actions/add-search.actions';
import { loadChangeCurrencys } from '../../../store/actions/change-currency.actions';
import {
  selectChangeCurrency,
  selectGetDateFrom,
  selectGetDateTo,
  selectGetSearchDateFrom,
  selectGetSearchDateTo,
  selectTicketsFrom,
  selectTicketsTo,
} from '../../../store/selectors/tickets.selectors';
import { loadAddTicketFlights } from '../../../store/actions/add-ticket-flight.actions';
import { TicketData } from '../../constants/ticket-data';

@Injectable({
  providedIn: 'root',
})
export class TicketsFacade {
  public currency$ = this.store.select(selectChangeCurrency);

  public dateStart$ = this.store.select(selectGetSearchDateTo);

  public dateEnd$ = this.store.select(selectGetSearchDateFrom);

  public from$ = combineLatest([
    this.store.select(selectGetDateFrom),
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

  public to$ = combineLatest([
    this.store.select(selectGetDateTo),
    this.store.select(selectTicketsTo),
  ]).pipe(
    map(([date, tickets]) => {
      tickets.map((item, i) => {
        return (
          item.date.setFullYear(date.getFullYear()),
          item.date.setMonth(date.getMonth()),
          item.date.setDate(date.getDate() + this.numbers[i])
        );
      });
      return tickets;
    })
  );

  private numbers = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

  private numbersFrom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(private store: Store) {}

  public addTicketFlights(flights: TicketData[]): void {
    this.store.dispatch(loadAddTicketFlights({ flights }));
  }

  public changeCurrency(currency: 'EUR' | 'USA' | 'PLN' | 'RUB'): void {
    this.store.dispatch(loadChangeCurrencys({ currency }));
  }

  public addDateToOnSearch(dateTo: Date): void {
    this.store.dispatch(loadAddDateTo({ dateTo }));
  }

  public addDateFromOnSearch(dateFrom: Date): void {
    this.store.dispatch(loadAddDateFrom({ dateFrom }));
  }

  public addFromOnSearch(from: string): void {
    this.store.dispatch(loadAddFrom({ from }));
  }

  public addToOnSearch(to: string): void {
    this.store.dispatch(loadAddTo({ to }));
  }

  public addPassengers(passengers: Passengers): void {
    this.store.dispatch(loadPassengers({ passengers }));
  }

  public addWay(way: string): void {
    this.store.dispatch(loadWay({ way }));
  }
}
