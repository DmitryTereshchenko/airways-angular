import { createAction, props } from '@ngrx/store';

export const loadChangeCurrencys = createAction(
  '[ChangeCurrency] Load ChangeCurrencys',
  props<{ currency: 'EUR' | 'USD' | 'PLN' | 'RUB' }>()
);
