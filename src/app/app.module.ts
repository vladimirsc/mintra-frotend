import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {PanelComponent} from './pages/panel/panel.component';
import {CustomMaterialModule} from './core/material.module';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {SHARED_SERVICE} from './services';
import {HomeComponent} from './pages/home/home.component';
import {CoreAppModule} from './core/core-app.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PanelComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    CustomMaterialModule,
    CoreAppModule
  ],
  providers: [...SHARED_SERVICE],
  bootstrap: [AppComponent]
})
export class AppModule {
}
