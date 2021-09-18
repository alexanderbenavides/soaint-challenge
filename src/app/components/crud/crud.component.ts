import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gob } from '@app/models/Gob.model';
import { GobService } from '@app/services/gob.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  private payload: Gob = {
    _about: '',
    accessURL: '',
    title: '',
    id: 0
  }
  formGroup: FormGroup;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder, 
    private aRouter: ActivatedRoute,
    private gobService: GobService,
    private route: Router
    ) { 
    this.aRouter.params.subscribe((params: Gob) => {
      if (params.id) {
        const payload = this.gobService.getCatalogById(Number(params.id));
        this.payload = payload;
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {    
    this.createForm();    
  }
  private createForm() {
    this.formGroup = this.fb.group({
      _about: [ this.payload ? this.payload._about : '', [Validators.required]],
      accessURL: [ this.payload ? this.payload.accessURL : '', [Validators.required]],
      title: [ this.payload ? this.payload.title : '', [Validators.required]],
    });
  }

  onSubmitForm() {    
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    this.payload._about = this.formGroup.value._about;
    this.payload.accessURL = this.formGroup.value.accessURL;
    this.payload.title = this.formGroup.value.title;
    if (this.payload.id) {
      this.gobService.updateCatalog(this.payload);
    } else {
      this.gobService.saveCatalog(this.payload);
      this.formGroup.reset();
    }
    this.route.navigate(['/']);
  }
  isFormInvalid(input: string) {
    return this.formGroup.get(input).invalid && this.formGroup.get(input).touched;
  }
}
