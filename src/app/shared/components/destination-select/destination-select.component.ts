import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-destination-select',
  templateUrl: './destination-select.component.html',
  styleUrls: ['./destination-select.component.scss'],
})
export class DestinationSelectComponent implements OnInit {
  @Input() public form!: FormGroup;
  @Input() public isReverseButton!: boolean;
  @Input() public formControlFrom!: FormControl;
  @Input() public formControlTo!: FormControl;
  public citiesList: City[] = [];

  public get isReverseButtonDisabled(): boolean {
    return !this.formControlFrom.value || !this.formControlTo.value;
  }

  public ngOnInit(): void {
    this.citiesList = this.generateCitiesList();
  }

  public changeDirection(): void {
    const tmp = this.formControlTo.value;
    this.formControlTo.setValue(this.formControlFrom.value);
    this.formControlFrom.setValue(tmp);
  }

  private generateCitiesList(): City[] {
    return [
      { name: 'Aberdeen', shortCode: 'ABZ', location: 'Dyce, United Kingdom' },
      {
        name: 'Amsterdam',
        shortCode: 'AMS',
        location: 'Schiphol, Netherlands',
      },
      { name: 'Baku', shortCode: 'GYD', location: 'Heydar Aliyev, Azerbaijan' },
      { name: 'Barcelona', shortCode: 'BCN', location: 'El Prat, Spain' },
      { name: 'Catania', shortCode: 'CTA', location: 'Fontanarossa, Italy' },
      { name: 'Dublin', shortCode: 'DUB', location: 'Ireland' },
    ];
  }
}