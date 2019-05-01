import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) { }

  saveNotice(noticesub: string, notice:string) {
    const noticeData = { noticesub: noticesub, notice: notice };
    console.log(noticeData);
    this.http.post<{ message: string }>('http://localhost:3000/api/dashboard', noticeData)
      .subscribe((responseData) => {
           console.log(responseData);
      });
   }

}
