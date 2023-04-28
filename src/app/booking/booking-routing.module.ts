import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { PassengerDetailsComponent } from './layouts/passenger-details/passenger-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookingLayoutComponent,
  },
  {
    path: 'booking/details',
    component: PassengerDetailsComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
