import { Passenger } from './passenger.model';

export interface SearchForm {
  way: string;
  from: string;
  to: string;
  dateStart: Date;
  dateEnd: Date;
  passengers: Passenger;
}
