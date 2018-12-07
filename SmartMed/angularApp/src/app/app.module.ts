import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientService } from './shared/services/patient/patient.service';
import { ReactiveFormsModule } from '@angular/forms';
import { VisitService } from './shared/services/visit/visit.service';
import { ComponentsModule } from './shared/components/components.module';
import { APIService } from './shared/services/api.service';
import { ApiInterceptorService } from './shared/services/api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ APIService, PatientService, VisitService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
