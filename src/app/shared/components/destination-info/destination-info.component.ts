import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.scss'],
})
export class DestinationInfoComponent {
  @Input() public isMultipleWay!: boolean;
  @Input() public form!: FormGroup;
  @Input() public formControlStartDate!: FormControl;
  @Input() public formControlEndDate!: FormControl;
  @Input() public formControlPassengers!: FormControl;

  public writePassengers(passengers: Passenger): void {
    this.formControlPassengers.setValue(passengers);
  }
}
