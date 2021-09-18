// general/@angular imports
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// @models
// import { BodyConfigPost, DeleteMessage } from '@models/main/config-body.model';
// import { CoursesTypeModel } from '@models/main/courses/courses-type.model';
// import { CoursesListModel } from '@models/main/courses/courses.model';
// import { MyCoursesListModel } from '@models/main/courses/my-courses.model';

// @services
import { ConfigService } from '@services/config.service';

@Injectable({
  providedIn: 'root',
})
export class GobService {
  constructor(private config: ConfigService) {}
  getCatalog() {
    return this.config.getFullQuery(`catalog/distribution`).pipe(
      map((response: any) => {
        return response.result.items.map((item:any) => {
          return {
            _about:item._about,
            accessURL:item.accessURL,
            title:item.title,
          };
            }
        );
      })
    );
  }

  public deleteCatalog(id: string) {
    return this.config.deleteQuery(`catalog/distribution/${id}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  public updateCatalog(data: any) {
    return this.config.updateQuery(data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  public saveCatalog(query: any) {
    return this.config.postFullQuery(query).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
