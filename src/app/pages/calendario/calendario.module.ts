import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendariosEditarComponent} from './calendarios-editar/calendarios-editar.component';
import {CalendariosNuevoComponent} from './calendarios-nuevo/calendarios-nuevo.component';
import {CalendariosVerComponent} from './calendarios-ver/calendarios-ver.component';
import {CalendariosComponent} from './calendarios/calendarios.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [CalendariosEditarComponent, CalendariosNuevoComponent, CalendariosVerComponent, CalendariosComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    SweetAlert2Module
  ]
})
export class CalendarioModule {
}
