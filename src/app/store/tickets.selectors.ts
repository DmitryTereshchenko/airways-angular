import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketState } from '../shared/models/ticket-state';

const selectTicketFeature = createFeatureSelector<TicketState>('tickets');

export const selectTicketsTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.tickets
);
export const selectTicketsFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.tickets
);
