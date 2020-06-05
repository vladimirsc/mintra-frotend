import {NgModule} from '@angular/core';
import {ConsejeroModule} from '../pages/consejero/consejero.module';
import {PlanDeTrabajoModule} from '../pages/plan-de-trabajo/plan-de-trabajo.module';
import {SesionDeTrabajoModule} from '../pages/sesion-de-trabajo/sesion-de-trabajo.module';
import {BoletinModule} from '../pages/boletin/boletin.module';
import {CalendarioModule} from '../pages/calendario/calendario.module';
import {SesionAsistenciaModule} from '../pages/sesion-de-trabajo/sesion-asistencia/sesion-asistencia.module';
import {SesionTemaModule} from '../pages/sesion-de-trabajo/sesion-tema/sesion-tema.module';
import {SesionActaModule} from '../pages/sesion-de-trabajo/sesion-acta/sesion-acta.module';
import {SeguimientoDeAcuerdosModule} from '../pages/seguimiento-de-acuerdos/seguimiento-de-acuerdos.module';
import {InformesAnualesModule} from '../pages/informes-anuales/informes-anuales.module';

@NgModule({
  imports: [],
  exports: [
    ConsejeroModule,
    PlanDeTrabajoModule,
    SesionDeTrabajoModule,
    BoletinModule,
    CalendarioModule,
    SesionAsistenciaModule,
    SesionTemaModule,
    SesionActaModule,
    SeguimientoDeAcuerdosModule,
    InformesAnualesModule
  ]
})
export class CoreAppModule {

}
