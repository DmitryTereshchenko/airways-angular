import { TicketData } from '../../booking/constants/ticket-data';
import { SearchForm } from './search-form.model';

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
  search: SearchForm;
}
