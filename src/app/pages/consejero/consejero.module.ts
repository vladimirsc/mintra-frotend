import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsejerosComponent} from './consejeros/consejeros.component';
import {ConsejerosNuevoComponent} from './consejeros-nuevo/consejeros-nuevo.component';
import {ConsejerosEditarComponent} from './consejeros-editar/consejeros-editar.component';
import {ConsejerosVerComponent} from './consejeros-ver/consejeros-ver.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ConsejerosComponent, ConsejerosNuevoComponent, ConsejerosEditarComponent, ConsejerosVerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsejeroModule {
}
