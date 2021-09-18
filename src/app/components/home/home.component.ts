import { Component, OnInit } from '@angular/core';
import {properties} from '@utils/properties';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  companyName = properties.companyName;
  constructor() {
  }

  ngOnInit() {}
}
