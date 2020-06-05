import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanesDeTrabajoComponent} from './planes-de-trabajo/planes-de-trabajo.component';
import {PlanesDeTrabajoNuevoComponent} from './planes-de-trabajo-nuevo/planes-de-trabajo-nuevo.component';
import {PlanesDeTrabajoEditarComponent} from './planes-de-trabajo-editar/planes-de-trabajo-editar.component';
import {PlanesDeTrabajoVerComponent} from './planes-de-trabajo-ver/planes-de-trabajo-ver.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PlanesDeTrabajoComponent, PlanesDeTrabajoNuevoComponent, PlanesDeTrabajoEditarComponent, PlanesDeTrabajoVerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanDeTrabajoModule {
}
