import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {SesionesTemaNuevoComponent} from './sesiones-tema-nuevo/sesiones-tema-nuevo.component';


@NgModule({
  declarations: [SesionesTemaNuevoComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class SesionTemaModule {
}
