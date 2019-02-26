import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { AdminAuthData } from './admin-auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createAdmin(email: string, password: string, branch: string) {
    const adminAuthData: AdminAuthData = { email: email , cpassword: password, branch: branch};

    this.http.post('http://localhost:3000/api/admin/signup' , adminAuthData)
       .subscribe( (response) => {
          console.log(response);
       });
  }

  loginAdmin(email: string, password: string) {
     const adminLoginData  = { email: email , password: password };
     this.http.post('http://localhost:3000/api/admin/login', adminLoginData)
       .subscribe(response => {
         console.log(response);
       });
  }
}
