import { TicketData } from '../../booking/constants/ticket-data';

export interface TicketState {
  dateTo: Date;
  dateFrom: Date;
  currency: 'EUR' | 'USD' | 'PLN' | 'RUB';
  ticketsTo: TicketData[];
  ticketsFrom: TicketData[];
  error: string | null;
  isLoading: boolean;
}
