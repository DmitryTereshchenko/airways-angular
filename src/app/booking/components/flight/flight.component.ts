import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { ChangeDateOnTicketsService } from '../services/change-date-on-tickets.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  public to$ = this.changeDateOnTicketsService.to$;

  public from$ = this.changeDateOnTicketsService.from$;

  private numbers = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';

  constructor(
    private location: Location,
    private store: Store,
    private changeDateOnTicketsService: ChangeDateOnTicketsService
  ) {}

  public locationBack(): void {
    this.location.back();
  }
}
