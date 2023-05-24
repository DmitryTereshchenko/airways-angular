import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';

  public searchData = {
    way: '',
    from: '',
    to: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    passengers: {
      adult: 0,
      child: 0,
      infant: 0,
    },
  };

  constructor(
    private location: Location,
    public ticketsFacade: TicketsFacade
  ) {}

  public locationBack(): void {
    this.location.back();
  }
}
