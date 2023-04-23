import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [FlightsComponent],
  imports: [CommonModule, BookingRoutingModule],
})
export class BookingModule {}
