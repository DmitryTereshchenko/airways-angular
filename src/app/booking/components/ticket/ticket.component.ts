import { Component, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TicketData } from '../../constants/ticket-data';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() public ticketsData!: TicketData[];
  public data: TicketData = {
    date: new Date('2023-03-01'),
    money: '',
    durationTime: '1h 30m',
    seats: 10,
    flightTime: '8:40',
    arrivalTime: '12:00',
  };
  public seatsClass = {
    red: this.data.seats <= 30,
    yellow: this.data.seats > 30,
  };
  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }
}
