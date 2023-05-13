import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import {
  selectGetDateFrom,
  selectGetDateTo,
  selectTicketsFrom,
  selectTicketsTo,
} from '../../../store/selectors/tickets.selectors';

@Injectable({
  providedIn: 'root',
})
export class ChangeDateOnTicketsService {
  public from$ = combineLatest([
    this.store.select(selectGetDateFrom),
    this.store.select(selectTicketsFrom),
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

  constructor(private store: Store) {}
}
