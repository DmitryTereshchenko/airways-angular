import { createAction, props } from '@ngrx/store';

// export const loadGetTickets = createAction(
//   '[GetTickets] Load GetTickets',
//   props<{ tickets: TicketData[] }>()
// );

// export const loadGetTicketsToSuccess = createAction(
//   '[GetTicketsSuccess] Load GetTicketsSuccess',
//   props<{ ticketsTo: TicketData[] }>()
// );
// export const loadGetTicketsFromSuccess = createAction(
//   '[GetTicketsSuccess] Load GetTicketsSuccess',
//   props<{ ticketsFrom: TicketData[] }>()
// );

export const changeDateOnTicketsTo = createAction(
  '[ChangeDateOnTickets] ChangeDateOnTickets',
  props<{ date: Date }>()
);
export const changeDateOnTicketsFrom = createAction(
  '[ChangeDateFromTickets] ChangeDateOnTickets',
  props<{ date: Date }>()
);
