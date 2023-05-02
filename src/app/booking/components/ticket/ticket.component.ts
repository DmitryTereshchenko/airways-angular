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
  @Input() public image!: string;
  @Input() public imageTimeTravel!: string;

  public data: TicketData = {
    date: new Date('2023-03-01'),
    money: '',
    durationTime: '1h 30m',
    seats: 0,
    flightTime: '',
    arrivalTime: '',
  };

  public isSliderVisible = true;

  public isFlightVisible = false;
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
