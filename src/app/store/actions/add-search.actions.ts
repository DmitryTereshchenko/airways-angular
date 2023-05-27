import { createAction, props } from '@ngrx/store';
import { SearchForm } from '../../shared/models/search-form.model';

export const addSearchInfo = createAction(
  '[AddSearch] Add search info',
  props<{ form: SearchForm }>()
);
