import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';
import { Notices } from '../models/notice.model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  notice: Notices[] = [];

  constructor(private fs: FrontEndService) { }


    ngOnInit() {
      this.fs.getNotice()
              .subscribe((noticeData: any) => {
                          this.notice = noticeData.notice.reverse();
                        });

    }


}
