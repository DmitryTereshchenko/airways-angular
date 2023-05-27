import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';
import { SearchForm } from '../../../shared/models/search-form.model';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.scss'],
})
export class RouteSearchComponent implements OnInit {
  public searchForm!: FormGroupTyped<SearchForm>;

  constructor(
    private fb: FormBuilder,
    private ticketsFacade: TicketsFacade,
    private router: Router
  ) {}

  public get datePlusWeek(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    return date;
  }

  public ngOnInit(): void {
    this.generateSearchForm();
  }

  public onSubmitForm(): void {
    console.log(this.searchForm.getRawValue());
    this.ticketsFacade.addSearchData(this.searchForm.getRawValue());
    this.router.navigate(['/booking/flights']);
  }

  public isMultipleWay(): boolean {
    return +this.searchForm.controls.way.value > 1;
  }

  private generateSearchForm(): void {
    this.searchForm = this.fb.group<ControlsOf<SearchForm>>({
      way: ['2', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      dateStart: [new Date(), Validators.required],
      dateEnd: [this.datePlusWeek, Validators.required],
      passengers: ['', Validators.required],
    });
  }
}
