import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap, Observable } from 'rxjs';
import { TicketData } from '../../constants/ticket-data';
import {
  selectTicketsFrom,
  selectTicketsTo,
} from '../../../store/tickets.selectors';

@Injectable({
  providedIn: 'root',
})
export class ChangeDateOnTicketsService {
  public to: TicketData[] = [];
  public from = [];
  constructor(private store: Store) {}

  public changeDateTickets(): void {
    this.store
      .select(selectTicketsTo)
      .pipe(tap((item) => (this.to = item)))
      .subscribe();
  }
}
