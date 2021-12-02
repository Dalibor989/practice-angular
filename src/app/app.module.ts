import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './base-component/header/header.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import { GuidebooksComponent } from './base-component/guidebooks/guidebooks.component';
import { GuidebookComponent } from './base-component/guidebooks/guidebook/guidebook.component';
import {GuidebookService} from "./base-component/guidebooks/guidebook.service";
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    BaseComponentComponent,
    GuidebooksComponent,
    GuidebookComponent,
    DropdownDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
    GuidebookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
