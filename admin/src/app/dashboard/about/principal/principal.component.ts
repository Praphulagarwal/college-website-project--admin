import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrincipalService } from 'app/services/principal/principal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PrincipalService]
})
export class PrincipalComponent implements OnInit {

  form: FormGroup;
  imagePreview: any;
  selectedFile: any = null;

  constructor( public principalService: PrincipalService, private http: HttpClient) { }

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
    this.principalService.addPrincipal(this.form.value.image, this.form.value.content);
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
      this.selectedFile = (event.target as HTMLInputElement).files[0];
      console.log(this.selectedFile.name);
  }

}
