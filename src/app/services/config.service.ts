// general/@angular imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @environments
import { environment } from '@environments/environment';

// @models
// import { BodyConfigPost } from '@models/main/config-body.model';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  basePath = environment.basePath;
  fullPath = environment.fullPath;
  constructor(private http: HttpClient) {}
  private setHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    return headers;
  }
  public getQuery(query: string) {
  const url = `${this.getRoot()}${query}`;
  return this.http.get(url,
    {
    // headers: this.setHeaders()
    }
  );
  }
  public getFullQuery(query: string) {
    const url = `${this.getVersionRoot()}${query}`;
    return this.http.get(url, {}
    );
  }
  public postFullQuery(query: any) {
    const url = `${this.getVersionRoot()}${query.path}`;
    return this.http.post(url, query.body, {
      headers: this.setHeaders()
    });
  }

  private getRoot() {
    return `${this.basePath}`;
  }

  private getVersionRoot(){
    return `${this.fullPath}`;
  }

  public postQuery(query: any) {
    const url = `${this.getRoot()}${query.path}`;
    return this.http.post(url, query.body, {
      headers: this.setHeaders()
    });
  }

  public deleteQuery(query: string) {
    const url = `${this.getVersionRoot()}${query}`;
    return this.http.delete(url,
      {
      headers: this.setHeaders()
      }
    );
  }
  public updateQuery(query: any) {
    const url = `${this.getVersionRoot()}${query.path}`;
    return this.http.put(url, query.body, {
      headers: this.setHeaders()
    });
  }
}
