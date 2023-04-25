import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { FlightComponent } from './components/flight/flight.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from '../material/material.module';
import { PassengerDetailsComponent } from './layouts/passenger-details/passenger-details.component';
import { PassengerItemComponent } from './components/passenger-item/passenger-item.component';

@NgModule({
  declarations: [
    BookingLayoutComponent,
    FlightComponent,
    TicketComponent,
    EditComponent,
    PassengerDetailsComponent,
    PassengerItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BookingRoutingModule,
    ReactiveFormsModule,
  ],
})
export class BookingModule {}
