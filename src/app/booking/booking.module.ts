import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { FlightComponent } from './components/flight/flight.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    BookingLayoutComponent,
    FlightComponent,
    TicketComponent,
    EditComponent,
  ],
  imports: [CommonModule, MaterialModule, BookingRoutingModule],
})
export class BookingModule {}
