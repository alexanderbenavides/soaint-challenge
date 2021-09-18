// general/@angular imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @environments
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  basePath = environment.basePath;
  fullPath = environment.fullPath;
  constructor(private http: HttpClient) {}

  public getFullQuery(query: string) {
    const url = `${this.getFullPath()}${query}`;
    return this.http.get(url, {}
    );
  }

  private getFullPath(){
    return `${this.fullPath}`;
  }
}
