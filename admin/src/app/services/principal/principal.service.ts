
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Principal } from './principal.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
 private principal: Principal[] = [];

constructor(private http: HttpClient) {}

addPrincipal( image: File, content: string) {
 //   const principal = {image: image , content: content};
 const principalData = new FormData();
 principalData.append('content' , content);
 principalData.append('image' , image );
 this.http.post<{ message: string }>('http://localhost:3000/api/dashboard/about/principal', principalData)
   .subscribe((responseData) => {
        console.log(responseData);
   });
}
}
