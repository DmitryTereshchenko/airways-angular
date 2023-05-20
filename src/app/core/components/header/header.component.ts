import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public readonly dateFormats = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY/DD/MM',
    'YYY/MM/DD',
  ];

  public readonly currencies = ['EUR', 'USA', 'RUB', 'PLN'];

  public isVisionStepper = false;

  public selectedStepIndex = 0;

  public selectedOption: 'EUR' | 'USA' | 'PLN' | 'RUB' = 'EUR';

  constructor(
    private router: Router,
    private location: Location,
    private ticketsFacade: TicketsFacade
  ) {
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

  public onOptionSelection(selectedValue: 'EUR' | 'USA' | 'PLN' | 'RUB'): void {
    this.selectedOption = selectedValue;
    this.ticketsFacade.changeCurrency(selectedValue ?? 'EUR');
  }

  public click(event: StepperSelectionEvent): void {
    this.selectedStepIndex = event.selectedIndex;
    if (event.selectedIndex === 0) {
      this.router.navigate(['/booking/flights']);
    }
    if (event.selectedIndex === 1) {
      this.router.navigate(['/booking/details']);
    }
    if (event.selectedIndex === 2) {
      this.router.navigate(['/booking/summary']);
    }
  }
}
