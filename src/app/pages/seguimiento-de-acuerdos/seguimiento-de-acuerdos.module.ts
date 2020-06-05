import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SeguimientoActaComponent} from './seguimiento-acta/seguimiento-acta.component';
import {DatosDeSesionComponent} from './componentes/datos-de-sesion/datos-de-sesion.component';
import {AccionRealizadaComponent} from './componentes/accion-realizada/accion-realizada.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { SeguimientoAcuerdosPorActaComponent } from './seguimiento-acuerdos-por-acta/seguimiento-acuerdos-por-acta.component';


@NgModule({
  declarations: [SeguimientoComponent,
    SeguimientoActaComponent,
    DatosDeSesionComponent,
    AccionRealizadaComponent,
    SeguimientoAcuerdosPorActaComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class SeguimientoDeAcuerdosModule {
}
