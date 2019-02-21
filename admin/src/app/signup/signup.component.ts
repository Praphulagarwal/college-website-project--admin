import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



export interface Departments {
  branch: string;
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
Branch: Departments[] = [
  {branch: 'cs-0', viewBranch: 'Computer Science And Engineering'},
  {branch: 'me-1', viewBranch: 'Mechanical Engineering'},
  {branch: 'ce-2', viewBranch: 'Civil Engineering'},
  {branch: 'ec-3', viewBranch: 'Electronics and Communication Engineering'},
  {branch: 'ee-4', viewBranch: 'Electrical Engineering'}
];
constructor() {}
onSignUp() {
 if (this.form.invalid) {
    return;
 }
}
ngOnInit() {
  this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl('')
  });
}


}
