import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SesionesAsistenciaNuevoComponent} from './sesiones-asistencia-nuevo/sesiones-asistencia-nuevo.component';
import {CustomMaterialModule} from '../../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    SesionesAsistenciaNuevoComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ],
  exports: [
    SesionesAsistenciaNuevoComponent
  ]
})
export class SesionAsistenciaModule {
}
