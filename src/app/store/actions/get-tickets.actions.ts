import { createAction, props } from '@ngrx/store';

export const changeDateOnTicketsTo = createAction(
  '[ChangeDateOnTickets] ChangeDateOnTickets',
  props<{ date: Date }>()
);

export const changeDateOnTicketsFrom = createAction(
  '[ChangeDateFromTickets] ChangeDateOnTickets',
  props<{ date: Date }>()
);
