import { Component, OnInit } from '@angular/core';
import {properties} from '@utils/properties';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public year: number;
  companyName = properties.companyName;
  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
