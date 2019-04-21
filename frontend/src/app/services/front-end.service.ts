import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Principal } from './principal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontEndService {


  constructor(private http: HttpClient) { }

    getPrincipal() {
      return this.http.get<Principal[]>('http://localhost:3000/api/dashboard/about/principal');
    }

}
