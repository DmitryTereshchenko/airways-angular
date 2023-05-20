import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketState } from '../../shared/models/ticket-state';

const selectTicketFeature = createFeatureSelector<TicketState>('tickets');

export const selectTicketsTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.ticketsTo
);
export const selectTicketsFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.ticketsFrom
);

export const selectGetDateTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.dateTo
);
export const selectGetDateFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.dateFrom
);

export const selectChangeCurrency = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.currency
);

export const selectGetSearchDateTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.dateTo
);

export const selectGetSearchDateFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.dateFrom
);

export const selectGetSearchTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.to
);

export const selectGetSearchFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.from
);
