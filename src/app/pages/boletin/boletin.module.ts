import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoletinesComponent} from './boletines/boletines.component';
import {BoletinesNuevoComponent} from './boletines-nuevo/boletines-nuevo.component';
import {BoletinesEditarComponent} from './boletines-editar/boletines-editar.component';
import {BoletinesVerComponent} from './boletines-ver/boletines-ver.component';
import {CustomMaterialModule} from '../../core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [BoletinesComponent, BoletinesNuevoComponent, BoletinesEditarComponent, BoletinesVerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BoletinModule {
}
