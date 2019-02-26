import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'app/services/admin.service';



export interface Departments {
  Branch: string;
  viewBranch: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  form: FormGroup;
branch: Departments[] = [
  {Branch: 'cs-0', viewBranch: 'Computer Science And Engineering'},
  {Branch: 'me-1', viewBranch: 'Mechanical Engineering'},
  {Branch: 'ce-2', viewBranch: 'Civil Engineering'},
  {Branch: 'ec-3', viewBranch: 'Electronics and Communication Engineering'},
  {Branch: 'ee-4', viewBranch: 'Electrical Engineering'}
];
constructor( public adminService: AdminService) {}
onSignUp() {
 if (this.form.invalid) {
    return;
 }
 this.adminService.createAdmin(this.form.value.email, this.form.value.cpassword, this.form.value.branch);
}
ngOnInit() {
  this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''),
      branch: new FormControl('')
  });
}


}
