import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacedStudents } from 'app/shared/placedStudents.model';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http: HttpClient) { }

  savePlacedStudents(stName: string, viewBranch: string, company: string, batch: any, packages: any) {
    console.log(viewBranch);
    const studentData: PlacedStudents = {stName: stName, viewBranch: viewBranch, company: company, batch: batch, packages: packages };
    console.log(studentData);
    this.http.post<{ message: string }>('http://localhost:3000/api/dashboard/placements/stPlacement', studentData)
      .subscribe((responseData) => {
           console.log(responseData);
      });
   }

}
