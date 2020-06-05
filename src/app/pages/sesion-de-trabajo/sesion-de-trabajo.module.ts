import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SesionesDeTrabajoComponent} from './sesiones-de-trabajo/sesiones-de-trabajo.component';
import {SesionesDeTrabajoNuevoComponent} from './sesiones-de-trabajo-nuevo/sesiones-de-trabajo-nuevo.component';
import {SesionesDeTrabajoEditarComponent} from './sesiones-de-trabajo-editar/sesiones-de-trabajo-editar.component';
import {SesionesDeTrabajoVerComponent} from './sesiones-de-trabajo-ver/sesiones-de-trabajo-ver.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    SesionesDeTrabajoComponent,
    SesionesDeTrabajoNuevoComponent,
    SesionesDeTrabajoEditarComponent,
    SesionesDeTrabajoVerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class SesionDeTrabajoModule {
}
