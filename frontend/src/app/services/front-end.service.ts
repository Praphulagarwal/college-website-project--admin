import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Principal } from './principal.model';
import { Observable } from 'rxjs';
import { PlacedStudents } from '../models/placedstudent.model';
import { Notices } from '../models/notice.model';

@Injectable({
  providedIn: 'root'
})
export class FrontEndService {


  constructor(private http: HttpClient) { }

    getPrincipal() {
      return this.http.get<Principal[]>('http://localhost:3000/api/dashboard/about/principal');
    }

    getPlacedStudents() {
      return this.http.get<PlacedStudents[]>('http://localhost:3000/api/dashboard/placements/stPlacement');
    }

    getNotice() {
      return this.http.get<Notices[]>('http://localhost:3000/api/dashboard');
    }

}
