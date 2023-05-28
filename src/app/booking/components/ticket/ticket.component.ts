import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import { TicketData } from '../../constants/ticket-data';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { SearchForm } from '../../../shared/models/search-form.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnChanges {
  @Input() public ticketsData!: TicketData[];
  @Input() public image!: string;
  @Input() public imageTimeTravel!: string;
  @Input() public currency!: 'EUR' | 'USA' | 'PLN' | 'RUB';
  @Input() public searchData!: SearchForm;
  @Input() public dateFrom!: Date;
  @Input() public searchTo!: string;
  @Input() public searchFrom!: string;
  @Output() public isEditClick = new EventEmitter<boolean>();
  @Output() public dataFrom = new EventEmitter<TicketData>();
  private numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  public dates: Date[] = [];

  public data: TicketData = {
    date: moment(this.dateFrom).toDate(),
    arrivalTime: '2h 50m',
    departureTimeFrom: '11:20',
    departureTimeTo: '13:10',
    price: {
      EUR: '€147,40',
      USA: '$159,19',
      RUB: '₽12 418,45',
      PLN: 'zł667,72',
    },
    seats: 33,
    flightCode: 'FR 1926',
  };

  public isSliderVisible = true;
  public isFlightVisible = false;

  public tickets: TicketData[] = [];

  constructor(public ticketsFacade: TicketsFacade) {}

  public ngOnChanges(): void {
    this.dates = this.ticketsData.map((item, i) => {
      return new Date(
        (item.date.setFullYear(moment(this.dateFrom).toDate().getFullYear()),
        item.date.setMonth(moment(this.dateFrom).toDate().getMonth()),
        item.date.setDate(
          moment(this.dateFrom).toDate().getDate() + this.numbers[i]
        ))
      );
    });
  }

  public onTabChange(event: MatTabChangeEvent): void {
    this.data = this.ticketsData[event.index];
  }

  public dispatchTicketsAndChangeVisible(): void {
    if (this.isSliderVisible) {
      this.ticketsFacade.addDateToOnSearch(this.data.date);
      this.dataFrom.emit(this.data);
    }
    this.isSliderVisible = !this.isSliderVisible;
    this.isEditClick.emit(this.isSliderVisible);
  }

  public changeFlightsVisibility(): void {
    if (!this.isFlightVisible) {
      this.isFlightVisible = true;
    }
  }
}
