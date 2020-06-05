import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformesAnualesNuevoComponent} from './informes-anuales-nuevo/informes-anuales-nuevo.component';
import {InformesAnualesEditarComponent} from './informes-anuales-editar/informes-anuales-editar.component';
import {InformesAnualesVerComponent} from './informes-anuales-ver/informes-anuales-ver.component';
import {InformesAnualesComponent} from './informes-anuales/informes-anuales.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InformesAnualesNuevoComponent, InformesAnualesEditarComponent, InformesAnualesVerComponent, InformesAnualesComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformesAnualesModule {
}
