import { createReducer, on } from '@ngrx/store';
import { TicketState } from '../shared/models/ticket-state';
import { loadGetTickets } from './get-tickets.actions';

export const initialState: TicketState = {
  to: [
    {
      date: new Date('2023-02-27'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },
    {
      date: new Date('2023-02-28'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },

    {
      date: new Date('2023-03-01'),
      money: '146.70',
      durationTime: '2h 30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-02'),
      money: '110.61',
      durationTime: '30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-03'),
      money: '80.11',
      durationTime: '3h 30m',
      seats: 50,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-04'),
      money: '146.70',
      durationTime: '2h',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-05'),
      money: '146.70',
      durationTime: '3h 30m',
      seats: 30,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
  ],
  from: [
    {
      date: new Date('2023-03-16'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },
    {
      date: new Date('2023-03-17'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },

    {
      date: new Date('2023-03-18'),
      money: '116.70',
      durationTime: '2h 30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-19'),
      money: '80.61',
      durationTime: '30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-20'),
      money: '80.11',
      durationTime: '3h 30m',
      seats: 50,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-21'),
      money: '144.70',
      durationTime: '2h',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-22'),
      money: '146.70',
      durationTime: '3h 30m',
      seats: 30,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
  ],
  error: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    loadGetTickets,
    (state): TicketState => ({
      ...state,
      isLoading: true,
    })
  )
);
