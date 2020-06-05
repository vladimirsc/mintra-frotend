import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: any = [
    {titulo: 'Consejeros', url: '/panel/consejeros', icono: 'description'},
    {titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind'},
    {titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update'},
    {titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in'},
    {titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page'},
    {titulo: 'Boletín', url: '/panel/boletines', icono: 'find_in_page'},
    {titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page'},
  ];

  constructor() {
  }
}
