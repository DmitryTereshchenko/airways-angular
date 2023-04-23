import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  public lotsOfTabs = [
    {
      date: '27 Feb',
      week: 'Monday',
      money: '',
    },
    {
      date: '28 Feb',
      week: 'Tuesday',
      money: '',
    },
    {
      date: '01 Mar',
      week: 'Wednesday',
      money: '146.70',
    },
    {
      date: '02 Mar',
      week: 'Thursday',
      money: '110.61',
    },
    {
      date: '03 Mar',
      week: 'Friday',
      money: '80.11',
    },
    {
      date: '04 Mar',
      week: 'Saturday',
      money: '146.70',
    },
    {
      date: '05 Mar',
      week: 'Sunday',
      money: '146.70',
    },
  ];
}
