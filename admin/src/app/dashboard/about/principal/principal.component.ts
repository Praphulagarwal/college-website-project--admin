import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  form: FormGroup;
  imagePreview: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      content: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
  }
  onImagePicked(event: Event) {
     const file = (event.target as HTMLInputElement).files[0];
     this.form.patchValue({image: file});
     this.form.get('image').updateValueAndValidity();
     const reader = new FileReader();
     reader.onload = () => {
           this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
  }

}
