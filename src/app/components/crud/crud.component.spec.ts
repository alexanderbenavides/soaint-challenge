import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
