import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSearchInfo } from '../../store/actions/add-search.actions';
import { loadChangeCurrencys } from '../../store/actions/change-currency.actions';
import {
  selectChangeCurrency,
  selectFlights,
  selectGetPassengers,
  selectGetSearch,
  selectGetSearchDateEnd,
  selectGetSearchDateStart,
  selectGetSearchFrom,
  selectGetSearchTo,
  selectGetWay,
  selectTicketsFrom,
  selectTicketsTo,
} from '../../store/selectors/tickets.selectors';
import { loadAddTicketFlights } from '../../store/actions/add-ticket-flight.actions';
import { TicketData } from '../../booking/constants/ticket-data';
import { SearchForm } from '../models/search-form.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsFacade {
  public currency$ = this.store.select(selectChangeCurrency);
  public selectGetSearch$ = this.store.select(selectGetSearch);
  public selectGetSearchDateStart$ = this.store.select(
    selectGetSearchDateStart
  );
  public selectGetSearchDateEnd$ = this.store.select(selectGetSearchDateEnd);
  public from$ = this.store.select(selectTicketsFrom);
  public to$ = this.store.select(selectTicketsTo);
  public way$ = this.store.select(selectGetWay);
  public flights = this.store.select(selectFlights);
  public searchFrom$ = this.store.select(selectGetSearchFrom);
  public searchTo$ = this.store.select(selectGetSearchTo);
  public passengers$ = this.store.select(selectGetPassengers);

  constructor(private store: Store) {}

  public addTicketFlights(flights: TicketData[]): void {
    this.store.dispatch(loadAddTicketFlights({ flights }));
  }

  public changeCurrency(currency: 'EUR' | 'USA' | 'PLN' | 'RUB'): void {
    this.store.dispatch(loadChangeCurrencys({ currency }));
  }

  public addSearchData(data: SearchForm): void {
    this.store.dispatch(addSearchInfo({ form: data }));
  }
}
