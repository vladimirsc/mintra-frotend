import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SesionesActaNuevoComponent} from './sesiones-acta-nuevo/sesiones-acta-nuevo.component';
import {CustomMaterialModule} from '../../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {SesionesFirmanteComponent} from './componentes/sesiones-firmante/sesiones-firmante.component';
import {SesionesAcuerdoComponent} from './componentes/sesiones-acuerdo/sesiones-acuerdo.component';
import {SesionesActaEditarComponent} from './sesiones-acta-editar/sesiones-acta-editar.component';
import {SesionesDatosSesionComponent} from './componentes/sesiones-datos-sesion/sesiones-datos-sesion.component';
import {SesionesDatosActaComponent} from './componentes/sesiones-datos-acta/sesiones-datos-acta.component';


@NgModule({
  declarations: [SesionesActaNuevoComponent, SesionesFirmanteComponent, SesionesAcuerdoComponent, SesionesActaEditarComponent, SesionesDatosSesionComponent, SesionesDatosActaComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class SesionActaModule {
}
