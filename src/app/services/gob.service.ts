// general/@angular imports
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// @services
import { ConfigService } from '@services/config.service';
import { Gob } from '@app/models/Gob.model';

@Injectable({
  providedIn: 'root',
})
export class GobService {
  private items: Array<Gob>;
  constructor(private config: ConfigService) {
    this.items = JSON.parse(sessionStorage.getItem('items')) as Array<Gob>;
  }
  public getCatalog() {
    return this.config.getFullQuery(`catalog/distribution`).pipe(
      map((response: any) => {
        return response.result.items.map((item:any, index: number) => {          
          return {
            id: index + 1,
            _about:item._about,
            accessURL:item.accessURL,
            title:item.title,
          };
            }
        );
      })
    );
  }

  public getCatalogById(id: number): Gob {
    return this.items.filter(obj => obj.id === id)[0];
  }

  get getCatalogFromStorage() {
    return this.items;
  }

  private setCatalogToStorage() {
    sessionStorage.setItem('items', JSON.stringify(this.items));
  }

  public deleteCatalog(id: number) {
    this.items = this.items.filter(obj=> obj.id !== id);
    this.setCatalogToStorage();
  }
  public updateCatalog(payload: Gob) {
    const itemIndex = this.items.findIndex(obj => obj.id === Number(payload.id));
    if (itemIndex > -1) {
      this.items[itemIndex]._about = payload._about;
      this.items[itemIndex].accessURL = payload.accessURL;
      this.items[itemIndex].title = payload.title;
    }
    this.setCatalogToStorage();
  }
  public saveCatalog(payload: Gob) {
    const payloadCopy = {
      _about: payload._about,
      accessURL: payload.accessURL,
      title: payload.title,
      id: this.items.length,
    }
    this.items.push(payloadCopy);
    this.setCatalogToStorage();
  }
}
