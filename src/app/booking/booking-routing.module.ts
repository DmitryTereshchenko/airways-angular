import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { PassengerDetailsComponent } from './layouts/passenger-details/passenger-details.component';
import { SummaryComponent } from './layouts/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: BookingLayoutComponent,
  },
  {
    path: 'details',
    component: PassengerDetailsComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
