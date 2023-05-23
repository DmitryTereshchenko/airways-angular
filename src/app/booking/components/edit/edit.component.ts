import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchForm } from '../../../shared/models/search-form.model';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';

type EditFlightForm = SearchForm;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public isEditFormVisible = false;
  public editFlightForm!: FormGroupTyped<EditFlightForm>;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.createEditFlightForm();
  }

  public onEditClick(): void {
    this.isEditFormVisible = !this.isEditFormVisible;
  }

  private createEditFlightForm(): void {
    this.editFlightForm = this.fb.group<ControlsOf<EditFlightForm>>({
      way: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      dateEnd: ['', Validators.required],
      dateStart: ['', Validators.required],
      passengers: ['', Validators.required],
    });
  }
}
