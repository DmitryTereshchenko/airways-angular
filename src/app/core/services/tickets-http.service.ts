import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap } from 'rxjs';

const obj = {
  way: 'Round Trip' || 'One Way',
  from: 'Dublin',
  to: 'Wroclaw',
  stardDate: new Date(),
  endDate: new Date(),
  passengers: {
    adults: 2,
    child: 2,
    infant: 1,
  },
  arrivalTime: '2h 50m',
  departureTimeFrom: '8:40',
  departureTimeTo: '7:40',
  price: '146.40',
  seats: 30,
  flightCode: 'FR 1925' || 'AA 100 ' || 'DL 876' || 'BA 203' || 'CX 8888',
};

export interface TicketData {
  way: 'Round Trip' | 'One Way';
  from: string;
  to: string;
  stardDate: Date;
  endDate?: Date;
  passengers: Passengers;
  arrivalTime: string;
  departureTimeFrom: string;
  departureTimeTo?: string;
  price: string;
  seats: number;
  flightCode: 'FR 1925' | 'AA 100' | 'DL 876' | 'BA 203' | 'CX 8888';
}
interface Passengers {
  adults: number;
  child: number;
  infant: number;
}
@Injectable({
  providedIn: 'root',
})
export class TicketsHttpService {

}
