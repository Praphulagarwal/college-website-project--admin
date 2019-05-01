import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NoticeService } from 'app/dashboard/services/notice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {

  form: FormGroup;

  constructor(private notice: NoticeService) { }

  ngOnInit() {
    this.form = new FormGroup({
    noticesub: new FormControl(null, {validators: [Validators.required]}),
    notice: new FormControl(null, {validators: [Validators.required]}),
    });
  }
  onSaveNotice() {
    if (this.form.invalid) {
      return;
    }
 this.notice.saveNotice(this.form.value.noticesub, this.form.value.notice);
}
}
