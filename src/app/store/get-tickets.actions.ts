import { createAction, props } from '@ngrx/store';
import { TicketData } from '../booking/constants/ticket-data';

export const loadGetTickets = createAction(
  '[GetTickets] Load GetTicketss',
  props<{ ticketData: TicketData[] }>()
);
