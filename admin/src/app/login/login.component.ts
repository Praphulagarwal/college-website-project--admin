import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AdminService } from 'app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;
  constructor(public adminService: AdminService) { }

  onAdminLogin() {
    if (this.form.invalid) {
      return;
    }
    this.adminService.loginAdmin(this.form.value.email, this.form.value.password);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

}
