import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontEndService } from 'src/app/services/front-end.service';
import { Principal } from 'src/app/services/principal.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

 principal$: any[] = [];

  constructor(private fs: FrontEndService) {}
  ngOnInit() {
        this.fs.getPrincipal()
        .subscribe((principaldata: any) => {
          this.principal$ = principaldata.principal;
          console.log(this.principal$);
       });

   }
}
