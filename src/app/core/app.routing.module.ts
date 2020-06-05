import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
/**
 * Externo
 */


const routes: Routes = [
  /*{path: 'sesion-externo', component: ExternoSesionComponent},
  {path: 'panel-externo', component: PanelExternoComponent},
  {path: 'panel-externo/contrato-personal-exceptuado', component: ContratoPersonalExceptuadoComponent},
  {path: 'panel-externo/contrato-personal-exceptuado/editar', component: ContratoPersonalExceptuadoEditarComponent},
  {path: 'panel-externo/contrato-personal-exceptuado/ver/:id', component: ContratoPersonalExceptuadoVerComponent},
  {path: 'panel-externo/contrato-trabajo', component: ContratoTrabajoComponent},
  {path: 'panel-externo/contrato-trabajo/editar', component: ContratoTrabajoEditarComponent},
  {path: 'panel-externo/contrato-trabajo/ver/:id', component: ContratoTrabajoVerComponent},
  {path: 'panel-externo/prorroga-contrato', component: ProrrogaContratoComponent},
  {path: 'panel-externo/prorroga-contrato/editar/:id', component: ProrrogaContratoEditarComponent},
  {path: 'panel-externo/modifica-contrato', component: ModificaContratoComponent},
  {
    path: 'panel-externo/modifica-contrato/editar/:codigo',
    component: ModificaContratoEditarComponent,
    resolve: {data: ContratoResolve}
  },
  {path: 'panel-externo/consultas-constancias', component: ConsultasConstanciasComponent},
  {path: 'panel-externo/consultas-constancias/ver/:codigo', component: ConsultasConstanciasVerComponent},
  {path: '**', component: ExternoSesionComponent}*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})

export class AppRoutingModule {
}

