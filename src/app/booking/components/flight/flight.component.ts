import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectChangeCurrency } from '../../../store/selectors/tickets.selectors';
import { ChangeDateOnTicketsService } from '../services/change-date-on-tickets.service';
import { TicketsFacade } from '../../services/tickets-facade.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  public to$ = this.changeDateOnTicketsService.to$;

  public from$ = this.changeDateOnTicketsService.from$;

  public currency$ = this.store.select(selectChangeCurrency);

  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';

  constructor(
    private location: Location,
    private changeDateOnTicketsService: ChangeDateOnTicketsService,
    private store: Store,
    public ticketsFacade: TicketsFacade
  ) {}

  public locationBack(): void {
    this.location.back();
  }
}
