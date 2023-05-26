import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Ticket {
  number: number;
  flightCode: string;
  typeTrip: string;
  ticketsTo: string;
  ticketsFrom: string;
  dateTo: string;
  dateFrom: string;
  departureTimeTo: string;
  departureTimeFrom: string;
  price: string;
  passengers: string;
}

const ELEMENT_DATA: Ticket[] = [
  {
    number: 0,
    flightCode: 'FR 1925',
    typeTrip: 'Round',
    ticketsTo: 'Dublin — Warsaw',
    ticketsFrom: 'Modlin  — Dublin',
    dateTo: '10 Mar, 2023',
    dateFrom: '1 Mar, 2023',
    departureTimeTo: '11:20',
    departureTimeFrom: '8:40',
    price: '$152,72',
    passengers: '1 x Adult',
  },
  {
    number: 1,
    flightCode: 'FR 1955',
    typeTrip: 'Round',
    ticketsTo: 'Dublin — Warsaw',
    ticketsFrom: 'Modlin  — Dublin',
    dateTo: '10 Mar, 2023',
    dateFrom: '1 Mar, 2023',
    departureTimeTo: '11:20',
    departureTimeFrom: '8:40',
    price: '$152,72',
    passengers: '1 x Adult',
  },
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public displayedColumns = [
    'select',
    'flightCode',
    'flight',
    'typeTrip',
    'dataTime',
    'passengers',
    'price',
    'edit',
  ];
  public dataSource = new MatTableDataSource<Ticket>(ELEMENT_DATA);
  public selection = new SelectionModel<Ticket>(true, []);

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public checkboxLabel(row?: Ticket): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }
}
