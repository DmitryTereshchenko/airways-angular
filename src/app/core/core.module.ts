import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { RouteSearchComponent } from './components/route-search/route-search.component';
import { BookingPageComponent } from './pages/booking/booking-page/booking-page.component';
import { PassengerItemComponent } from './components/passenger-item/passenger-item.component';
import {CoreRoutingModule} from "./core-routing.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    RouteSearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    CoreRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, MainPageComponent],
})
export class CoreModule {}
