import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelComponent} from './pages/panel/panel.component';
import {ConsejerosComponent} from './pages/consejero/consejeros/consejeros.component';
import {ConsejerosNuevoComponent} from './pages/consejero/consejeros-nuevo/consejeros-nuevo.component';
import {ConsejerosEditarComponent} from './pages/consejero/consejeros-editar/consejeros-editar.component';
import {ConsejerosVerComponent} from './pages/consejero/consejeros-ver/consejeros-ver.component';
import {HomeComponent} from './pages/home/home.component';
import {PlanesDeTrabajoComponent} from './pages/plan-de-trabajo/planes-de-trabajo/planes-de-trabajo.component';
import {PlanesDeTrabajoNuevoComponent} from './pages/plan-de-trabajo/planes-de-trabajo-nuevo/planes-de-trabajo-nuevo.component';
import {PlanesDeTrabajoEditarComponent} from './pages/plan-de-trabajo/planes-de-trabajo-editar/planes-de-trabajo-editar.component';
import {PlanesDeTrabajoVerComponent} from './pages/plan-de-trabajo/planes-de-trabajo-ver/planes-de-trabajo-ver.component';
import {SesionesDeTrabajoComponent} from './pages/sesion-de-trabajo/sesiones-de-trabajo/sesiones-de-trabajo.component';
import {SesionesDeTrabajoNuevoComponent} from './pages/sesion-de-trabajo/sesiones-de-trabajo-nuevo/sesiones-de-trabajo-nuevo.component';
import {SesionesDeTrabajoEditarComponent} from './pages/sesion-de-trabajo/sesiones-de-trabajo-editar/sesiones-de-trabajo-editar.component';
import {SesionesDeTrabajoVerComponent} from './pages/sesion-de-trabajo/sesiones-de-trabajo-ver/sesiones-de-trabajo-ver.component';
import {BoletinesComponent} from './pages/boletin/boletines/boletines.component';
import {BoletinesNuevoComponent} from './pages/boletin/boletines-nuevo/boletines-nuevo.component';
import {BoletinesEditarComponent} from './pages/boletin/boletines-editar/boletines-editar.component';
import {BoletinesVerComponent} from './pages/boletin/boletines-ver/boletines-ver.component';
import {CalendariosComponent} from './pages/calendario/calendarios/calendarios.component';
import {CalendariosNuevoComponent} from './pages/calendario/calendarios-nuevo/calendarios-nuevo.component';
import {CalendariosEditarComponent} from './pages/calendario/calendarios-editar/calendarios-editar.component';
import {CalendariosVerComponent} from './pages/calendario/calendarios-ver/calendarios-ver.component';
import {SesionesAsistenciaNuevoComponent} from './pages/sesion-de-trabajo/sesion-asistencia/sesiones-asistencia-nuevo/sesiones-asistencia-nuevo.component';
import {SesionesTemaNuevoComponent} from './pages/sesion-de-trabajo/sesion-tema/sesiones-tema-nuevo/sesiones-tema-nuevo.component';
import {SesionesActaNuevoComponent} from './pages/sesion-de-trabajo/sesion-acta/sesiones-acta-nuevo/sesiones-acta-nuevo.component';
import {SeguimientoComponent} from './pages/seguimiento-de-acuerdos/seguimiento/seguimiento.component';
import {SesionesActaEditarComponent} from './pages/sesion-de-trabajo/sesion-acta/sesiones-acta-editar/sesiones-acta-editar.component';
import {SeguimientoActaComponent} from './pages/seguimiento-de-acuerdos/seguimiento-acta/seguimiento-acta.component';
import {SeguimientoAcuerdosPorActaComponent} from './pages/seguimiento-de-acuerdos/seguimiento-acuerdos-por-acta/seguimiento-acuerdos-por-acta.component';
import {InformesAnualesComponent} from './pages/informes-anuales/informes-anuales/informes-anuales.component';
import {InformesAnualesNuevoComponent} from './pages/informes-anuales/informes-anuales-nuevo/informes-anuales-nuevo.component';
import {InformesAnualesEditarComponent} from './pages/informes-anuales/informes-anuales-editar/informes-anuales-editar.component';
import {InformesAnualesVerComponent} from './pages/informes-anuales/informes-anuales-ver/informes-anuales-ver.component';


const routes: Routes = [
  {path: '', redirectTo: 'panel/home', pathMatch: 'full'},
  {
    path: 'panel', component: PanelComponent,
    children: [
      {path: 'home', component: HomeComponent},

      {path: 'consejeros', component: ConsejerosComponent},
      {path: 'consejeros/nuevo', component: ConsejerosNuevoComponent},
      {path: 'consejeros/editar/:id', component: ConsejerosEditarComponent},
      {path: 'consejeros/ver/:id', component: ConsejerosVerComponent},

      {path: 'planes-de-trabajo', component: PlanesDeTrabajoComponent},
      {path: 'planes-de-trabajo/nuevo', component: PlanesDeTrabajoNuevoComponent},
      {path: 'planes-de-trabajo/editar/:id', component: PlanesDeTrabajoEditarComponent},
      {path: 'planes-de-trabajo/ver/:id', component: PlanesDeTrabajoVerComponent},

      {path: 'sesiones-de-trabajo', component: SesionesDeTrabajoComponent},
      {path: 'sesiones-de-trabajo/nuevo', component: SesionesDeTrabajoNuevoComponent},
      {path: 'sesiones-de-trabajo/editar/:id', component: SesionesDeTrabajoEditarComponent},
      {path: 'sesiones-de-trabajo/ver/:id', component: SesionesDeTrabajoVerComponent},

      {path: 'sesiones-de-trabajo/:id/asistencia', component: SesionesAsistenciaNuevoComponent},

      {path: 'sesiones-de-trabajo/:id/tema', component: SesionesTemaNuevoComponent},

      {path: 'sesiones-de-trabajo/:id/acta/nuevo', component: SesionesActaNuevoComponent},
      {path: 'sesiones-de-trabajo/:id/acta/editar/:idActa', component: SesionesActaEditarComponent},

      {path: 'seguimiento-de-acuerdos/:idSesion/acta/:idActa/acuerdo/:idAcuerdo/accion/nuevo', component: SeguimientoActaComponent},

      {path: 'seguimiento-de-acuerdos/:idSesion/acta/:idActa/acuerdos', component: SeguimientoAcuerdosPorActaComponent},

      {path: 'seguimiento-de-acuerdos', component: SeguimientoComponent},


      {path: 'boletines', component: BoletinesComponent},
      {path: 'boletines/nuevo', component: BoletinesNuevoComponent},
      {path: 'boletines/editar/:id', component: BoletinesEditarComponent},
      {path: 'boletines/ver/:id', component: BoletinesVerComponent},


      {path: 'calendarios', component: CalendariosComponent},
      {path: 'calendarios/nuevo', component: CalendariosNuevoComponent},
      {path: 'calendarios/editar/:id', component: CalendariosEditarComponent},
      {path: 'calendarios/ver/:id', component: CalendariosVerComponent},


      {path: 'informes-anuales', component: InformesAnualesComponent},
      {path: 'informes-anuales/nuevo', component: InformesAnualesNuevoComponent},
      {path: 'informes-anuales/editar/:id', component: InformesAnualesEditarComponent},
      {path: 'informes-anuales/ver/:id', component: InformesAnualesVerComponent}

    ]
  },
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
