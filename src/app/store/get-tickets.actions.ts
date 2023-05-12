import { createAction, props } from '@ngrx/store';
import { TicketData } from '../booking/constants/ticket-data';

export const loadGetTickets = createAction(
  '[GetTickets] Load GetTickets',
  props<{ tickets: TicketData[] }>()
);

export const loadGetTicketsSuccess = createAction(
  '[GetTicketsSuccess] Load GetTicketsSuccess',
  props<{ tickets: TicketData[] }>()
);
