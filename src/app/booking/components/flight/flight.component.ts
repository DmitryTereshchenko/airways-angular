import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TicketsFacade } from '../services/tickets-facade.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  public to$ = this.ticketsFacade.to$;

  public from$ = this.ticketsFacade.from$;

  public currency$ = this.ticketsFacade.currency$;

  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';

  constructor(
    private location: Location,
    public ticketsFacade: TicketsFacade
  ) {}

  public locationBack(): void {
    this.location.back();
  }
}
