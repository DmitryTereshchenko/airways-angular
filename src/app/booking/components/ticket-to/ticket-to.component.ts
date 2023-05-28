import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TicketData } from '../../constants/ticket-data';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { Search } from '../../../shared/models/ticket-state';

@Component({
  selector: 'app-ticket-to',
  templateUrl: './ticket-to.component.html',
  styleUrls: ['./ticket-to.component.scss'],
})
export class TicketToComponent implements OnChanges {
  @Input() public ticketsData!: TicketData[];
  @Input() public image!: string;
  @Input() public imageTimeTravel!: string;
  @Input() public currency!: 'EUR' | 'USA' | 'PLN' | 'RUB';
  @Input() public searchData!: Search;
  @Input() public dateFrom!: Date;
  @Input() public searchTo!: string;
  @Input() public searchFrom!: string;
  @Output() public isEditToClick = new EventEmitter<boolean>();
  @Output() public dataTo = new EventEmitter<TicketData>();
  private numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  public data: TicketData = {
    date: new Date(),
    arrivalTime: '',
    departureTimeFrom: '',
    departureTimeTo: '',
    price: {
      EUR: '',
      USA: '',
      RUB: '',
      PLN: '',
    },
    seats: 0,
    flightCode: '',
  };

  public isSliderVisible = true;
  public isFlightVisible = false;

  public tickets: TicketData[] = [];
  public dates: Date[] = [];

  constructor(public ticketsFacade: TicketsFacade) {}

  public ngOnChanges(): void {
    this.dates = this.ticketsData.map((item, i) => {
      return new Date(
        (item.date.setFullYear(this.dateFrom.getFullYear()),
        item.date.setMonth(this.dateFrom.getMonth()),
        item.date.setDate(this.dateFrom.getDate() + this.numbers[i]))
      );
    });
  }

  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }

  public dispatchTicketsAndChangeVisible(): void {
    if (this.isSliderVisible) {
      this.ticketsFacade.addDateFromOnSearch(this.data.date);
      this.dataTo.emit(this.data);
    }
    this.isSliderVisible = !this.isSliderVisible;
    this.isEditToClick.emit(this.isSliderVisible);
  }

  public changeFlightsVisibility(): void {
    if (!this.isFlightVisible) {
      this.isFlightVisible = true;
    }
  }
}