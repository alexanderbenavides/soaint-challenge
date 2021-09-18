import { Component, OnInit } from '@angular/core';
import { GobService } from '@app/services/gob.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listData: Array<string> = [];
  constructor(    private gobService: GobService,
    ) { 
      this.getGobServices();
    }

  ngOnInit(): void {
  }

  private getGobServices() {
    console.log('gaaaaaaaaaaa');
    
    this.gobService.getCatalog().subscribe(
      (response: Array<any>) => {
        this.listData = response;
        
      },
      (errService) => {
        console.log(errService);
        
      }
    );
  }
}
