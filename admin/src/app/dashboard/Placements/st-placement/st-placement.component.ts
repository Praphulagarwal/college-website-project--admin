import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PlacementService } from 'app/dashboard/services/placement.service';
import { PlacedStudents } from 'app/shared/placedStudents.model';

export interface Departments {
  Branch: string;
  viewbranch: string;
}



@Component({
  selector: 'app-st-placement',
  templateUrl: './st-placement.component.html',
  styleUrls: ['./st-placement.component.css'],
  providers: [PlacementService]
})



export class StPlacementComponent implements OnInit {
 form: FormGroup;
 viewbranchs: Departments[] = [
  {Branch: 'cs-0', viewbranch: 'Computer Science And Engineering'},
  {Branch: 'me-1', viewbranch: 'Mechanical Engineering'},
  {Branch: 'ce-2', viewbranch: 'Civil Engineering'},
  {Branch: 'ec-3', viewbranch: 'Electronics and Communication Engineering'},
  {Branch: 'ee-4', viewbranch: 'Electrical Engineering'}
];


  constructor(private plmntservice: PlacementService) { }

  ngOnInit() {
    this.form = new FormGroup({
      stName: new FormControl(null, {validators: [Validators.required]}),
      viewbranchs: new FormControl(null, {validators: [Validators.required]}),
      company: new FormControl(null, {validators: [Validators.required]}),
      batch: new FormControl(null, {validators: [Validators.required]}),
      package: new FormControl(null, {validators: [Validators.required]})

    });
    console.log(this.form);
  }

  onSaveStudent() {
    if (this.form.invalid) {
      return;
    }
    this.plmntservice.savePlacedStudents(this.form.value.stName,
      this.form.value.viewbranchs,
      this.form.value.company,
      this.form.value.batch,
      this.form.value.package
      );

  }

}


