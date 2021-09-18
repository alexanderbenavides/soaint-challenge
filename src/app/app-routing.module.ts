// general/@angular imports
import { RouterModule, Routes } from '@angular/router';

// @components
import { HomeComponent } from '@components/home/home.component';
import { ListComponent } from '@components/list/list.component';
import { CrudComponent } from '@components/crud/crud.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  {path: '', component: ListComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'crud/:id', component: CrudComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false, initialNavigation: 'enabled', relativeLinkResolution: 'legacy' });
