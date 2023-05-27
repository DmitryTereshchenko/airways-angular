import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public selectedDateFormat!: string;
  public readonly currencies = ['EUR', 'USA', 'RUB', 'PLN'];

  public isVisionStepper = false;

  public selectedStepIndex = 0;

  public selectedOption: 'EUR' | 'USA' | 'PLN' | 'RUB' = 'EUR';

  constructor(
    private router: Router,
    private location: Location,
    private ticketsFacade: TicketsFacade,
    private dateService: DateService
  ) {
    this.selectedDateFormat = this.dateService.format;
    this.location.onUrlChange((url) => {
      if (url === '/') {
        this.isVisionStepper = false;
      }
      if (url === '/booking/flights') {
        this.selectedStepIndex = 0;
        this.isVisionStepper = true;
      }
      if (url === '/booking/details') {
        this.selectedStepIndex = 1;
        this.isVisionStepper = true;
      }
      if (url === '/booking/summary') {
        this.selectedStepIndex = 2;
        this.isVisionStepper = true;
      }
    });
  }

  public get dateFormats(): string[] {
    return this.dateService.dateFormats;
  }

  public onOptionSelection(selectedValue: 'EUR' | 'USA' | 'PLN' | 'RUB'): void {
    this.selectedOption = selectedValue;
    this.ticketsFacade.changeCurrency(selectedValue ?? 'EUR');
  }

  public onDateFormatChanged(): void {
    this.dateService.format = this.selectedDateFormat;
  }
}
