import { createAction, props } from '@ngrx/store';
import { Passengers } from '../../shared/models/ticket-state';

export const loadAddDateTo = createAction(
  '[AddSearch] Load ddDateTo',
  props<{ dateTo: Date }>()
);

export const loadAddDateFrom = createAction(
  '[AddSearch] Load AddDateFrom',
  props<{ dateFrom: Date }>()
);

export const loadAddFrom = createAction(
  '[AddSearch] Load AddFrom',
  props<{ from: string }>()
);

export const loadAddTo = createAction(
  '[AddSearch] Load AddTo',
  props<{ to: string }>()
);

export const loadPassengers = createAction(
  '[AddSearch] Load Passengers',
  props<{ passengers: Passengers }>()
);

export const loadWay = createAction(
  '[AddSearch] Load Way',
  props<{ way: string }>()
);
