import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.scss'],
})
export class PassengerItemComponent {
  @Input()
  public index!: number;

  @Input()
  public passengers!: FormArray;
}
