import { TicketData } from '../../booking/constants/ticket-data';

export interface TicketState {
  dateTo: Date;
  dateFrom: Date;
  currency: 'EUR' | 'USA' | 'PLN' | 'RUB';
  ticketsTo: TicketData[];
  ticketsFrom: TicketData[];
  basket: Basket;
  error: string | null;
  isLoading: boolean;
}

interface Basket {
  flights: TicketData[];
  search: Search;
}

export interface Search {
  way: string;
  from: string;
  to: string;
  dateStart: Date;
  dateEnd: Date;
  passengers: Passengers;
}

export interface Passengers {
  adult: number;
  child: number;
  infant: number;
}
