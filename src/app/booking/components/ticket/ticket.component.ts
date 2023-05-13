import { Component, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TicketData } from '../../constants/ticket-data';
import { ChangeDateOnTicketsService } from '../services/change-date-on-tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() public ticketsData!: TicketData[];
  @Input() public image!: string;
  @Input() public imageTimeTravel!: string;
  public to = this.changeDateOnTicketsService.to$;
  public data: TicketData = {
    date: new Date(),
    arrivalTime: '',
    departureTimeFrom: '',
    departureTimeTo: '',
    price: '',
    seats: 0,
    flightCode: '',
  };

  public isSliderVisible = true;

  public isFlightVisible = false;

  constructor(private changeDateOnTicketsService: ChangeDateOnTicketsService) {}

  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }

  public onChangeVisibleSlider(): void {
    this.isSliderVisible = !this.isSliderVisible;
  }

  public changeFlightsVisibility(): void {
    if (!this.isFlightVisible) {
      this.isFlightVisible = true;
    }
  }
}
