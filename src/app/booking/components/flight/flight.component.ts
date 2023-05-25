import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { first, Subscription } from 'rxjs';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { TicketData } from '../../constants/ticket-data';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit, OnDestroy {
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

  public way = '';

  public flight: TicketData[] = [];

  public isEditTo = true;

  public from = '';
  public to = '';

  private subscription = new Subscription();

  constructor(
    private location: Location,
    public ticketsFacade: TicketsFacade
  ) {}

  public locationBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.ticketsFacade.way$.pipe(first()).subscribe((way) => (this.way = way));
    this.subscription.add(
      this.ticketsFacade.searchFrom$.subscribe((from) => {
        this.from = from;
      })
    );
    this.subscription.add(
      this.ticketsFacade.searchTo$.subscribe((to) => {
        this.to = to;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEdit(edit: boolean): void {
    this.isEditTo = edit;
  }
}
