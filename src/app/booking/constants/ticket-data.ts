export interface TicketData {
  date: Date;
  arrivalTime: string;
  departureTimeFrom: string;
  departureTimeTo: string;
  price: string;
  seats: number;
  flightCode: string;
}
// export interface TicketData {
//   date: Date;
//   money: string;
//   durationTime: string;
//   seats: number;
//   flightTime: string;
//   arrivalTime: string;
// }
// arrivalTime: '2h 50m',
// departureTimeFrom: '8:40',
// departureTimeTo: '7:40',
// price: '146.40',
// seats: 30,
// flightCode: 'FR 1925',
// flightCode: 'FR 1925' | 'AA 100' | 'DL 876' | 'BA 203' | 'CX 8888';
const initialStore = {
  tickets: ['бэк'],
  buscket: {
    search: {
      to: 'asdas',
      from: 'asdas',
      dataStart: new Date(),
      dataEnd: new Date(),
      passenges: {
        adult: 2,
        field: 2,
        infant: 2,
      },
    },
    flights: {
      arrivalTime: '2h 50m',
      departureTimeTo: '7:40',
      departureTimeFrom: '8:40',
      price: '146.40',
      seats: 30,
      flightCode: 'FR 1925',
    },
    input: {},
  },
};
