import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(private location: Location) {}
  public locationBack(): void {
    this.location.back();
  }
}
