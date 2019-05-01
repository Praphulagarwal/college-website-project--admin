import { Component, OnInit } from '@angular/core';
import { Notices } from '../models/notice.model';
import { FrontEndService } from '../services/front-end.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notice: Notices[] = [];

  constructor(private fs: FrontEndService) { }

  ngOnInit() {
    this.fs.getNotice()
            .subscribe((noticeData: any) => {
                        this.notice = noticeData.notice.reverse();
                      });

  }

}
