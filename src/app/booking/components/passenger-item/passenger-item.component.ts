import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.scss'],
})
export class PassengerItemComponent {
  @Input()
  public passenger!: string;

  @Input()
  public index!: number;
}
