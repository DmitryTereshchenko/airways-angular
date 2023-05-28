import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import moment from 'moment';
import { TicketData } from '../../constants/ticket-data';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { SearchForm } from '../../../shared/models/search-form.model';

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
  @Input() public searchData!: SearchForm;
  @Input() public dateFrom!: Date;
  @Input() public searchTo!: string;
  @Input() public searchFrom!: string;
  @Output() public isEditToClick = new EventEmitter<boolean>();
  @Output() public dataTo = new EventEmitter<TicketData>();
  private numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  public dates: Date[] = [];

  public data: TicketData = {
    date: moment(this.dateFrom).toDate(),
    arrivalTime: '2h 40m',
    departureTimeFrom: '6:30',
    departureTimeTo: '9:10',
    price: {
      EUR: '€147,40',
      USA: '$159,19',
      RUB: '₽12 418,45',
      PLN: 'zł667,72',
    },
    seats: 30,
    flightCode: 'DL 876',
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
