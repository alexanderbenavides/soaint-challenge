// general/@angular imports
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// @app
import { APP_ROUTING } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

// @environments
import { environment } from '@environments/environment';

// @components
import { HomeComponent } from '@components/home/home.component';

// @interceptors
import {InterceptorHeader} from '@app/interceptors/interceptor.service';

// @shared
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CrudComponent } from './components/crud/crud.component';

// primeng
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DataViewModule,
    TableModule,
    InputTextModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHeader,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
