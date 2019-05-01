import { Component, OnInit } from '@angular/core';
import { PlacedStudents } from 'src/app/models/placedstudent.model';
import { FrontEndService } from 'src/app/services/front-end.service';

@Component({
  selector: 'app-st-placement',
  templateUrl: './st-placement.component.html',
  styleUrls: ['./st-placement.component.css']
})
export class StPlacementComponent implements OnInit {

placedStudent: PlacedStudents[] = [];

  constructor(private fs: FrontEndService) { }

  ngOnInit() {
    this.fs.getPlacedStudents()
      .subscribe((placedStudentData: any) => {
         console.log(placedStudentData);
         this.placedStudent = placedStudentData.placedStudent.reverse();
         console.log(this.placedStudent);
      });
  }

}
