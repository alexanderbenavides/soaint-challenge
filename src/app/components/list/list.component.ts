import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gob } from '@app/models/Gob.model';
import { GobService } from '@app/services/gob.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listData: Array<Gob> = [];
  totalRecords: number = 0; 
  constructor(private gobService: GobService, private route: Router) {
      if (sessionStorage.getItem('items')) {
        this.listData = this.gobService.getCatalogFromStorage;
        
      } else {
        this.getGobServices();
      }
    }

  ngOnInit(): void {
  }

  private getGobServices() {    
    this.gobService.getCatalog().subscribe(
      (response: Array<Gob>) => {
        this.listData = response;
        this.totalRecords = this.listData.length;        
        sessionStorage.setItem('items', JSON.stringify(this.listData));
      },
      (errService) => {
        console.error(errService);
        
      }
    );
  }
  editList(id: string) {    
    this.route.navigate([`crud/${id}`]);
    
  }
  deleteList(id: number) {
    this.gobService.deleteCatalog(id);
    this.listData = this.gobService.getCatalogFromStorage;
  }
  onGoTo(url: string) {
    window.location.href = url;
  }
}
