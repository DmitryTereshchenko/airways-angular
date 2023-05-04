import { TicketData } from '../../booking/constants/ticket-data';

export interface TicketState {
  to: TicketData[];
  from: TicketData[];
  error: string | null;
  isLoading: boolean;
}
