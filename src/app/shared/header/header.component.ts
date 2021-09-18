// general/@angular imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  formGroup: FormGroup;
  isLogIn: boolean;
  pathnameLogin: boolean;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit(): void {}
  createForm() {
    this.formGroup = this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  isFormInvalid(input: string) {
    return this.formGroup.get(input).invalid && this.formGroup.get(input).touched;
  }
}
