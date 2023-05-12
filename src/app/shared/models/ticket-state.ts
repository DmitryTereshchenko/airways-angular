import { TicketData } from '../../booking/constants/ticket-data';

export interface TicketState {
  // to: TicketData[];
  // from: TicketData[];
  date: Date;
  tickets: TicketData[];
  error: string | null;
  isLoading: boolean;
}
