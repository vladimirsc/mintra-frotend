import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';

interface SesionRowResponse {

  id: number;
  numeroSesion: string;
  fechaSesion: string;
  tipoSesion: string;
  asistencia: string;
  temas: string;
  acta: string;

}

@Component({
  selector: 'app-sesiones-de-trabajo',
  templateUrl: './sesiones-de-trabajo.component.html',
  styleUrls: ['./sesiones-de-trabajo.component.scss']
})
export class SesionesDeTrabajoComponent implements OnInit {


  const;
  ELEMENT_DATA: SesionRowResponse[] = [
    {
      id: 1000,
      numeroSesion: '0-2020-0001',
      fechaSesion: '01/02/2020',
      tipoSesion: 'ORDINARIA',
      asistencia: 'asistencia.pdf',
      temas: 'mis_temas.pdf',
      acta: 'mi_acta.pdf',
    },
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['numeroSesion', 'fechaSesion', 'tipoSesion', 'asistencia', 'temas', 'acta', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      numeroSesion: [''],
      fechaInicioSesion: [''],
      fechaFinSesion: [''],
      tipoSesion: [''],
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/sesiones-de-trabajo/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/sesiones-de-trabajo/editar/' + id]);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/sesiones-de-trabajo/nuevo']);
  }

  decargarArchivo(archivo: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire({
        title: 'Descarga Completa!',
        confirmButtonText: 'Continuar'
      });
    }, 800);
  }

  asistencia(idSesion: any) {
    this.router.navigate(['/panel/sesiones-de-trabajo/' + idSesion + '/asistencia']);
  }

  agregarTema(idSesion: any) {
    this.router.navigate(['/panel/sesiones-de-trabajo/' + idSesion + '/tema']);
  }

  agregarActa(idSesion: any) {
    this.router.navigate(['/panel/sesiones-de-trabajo/' + idSesion + '/acta/nuevo']);
  }
}
