import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';


interface SesionRow {

  id: number;
  idSesion: number;
  idActa: number;
  numeroSesion: string;
  tipoSesion: string;
  fechaSesion: string;
  numeroActa: string;
}

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {


  const;
  ELEMENT_DATA: SesionRow[] = [
    {
      id: 1000,
      idSesion: 1090,
      idActa: 230,
      numeroSesion: 'SES-0-2020-0001',
      tipoSesion: 'ORDINARIA',
      fechaSesion: '01/02/2020',
      numeroActa: 'ACTA-2000-2020-001',
    },
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['nro', 'numeroSesion', 'tipoSesion', 'fechaSesion', 'numeroActa', 'seguimiento'];
  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

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

  editarActa(idActa: string, idSesion: string) {
    this.router.navigate(['/panel/sesiones-de-trabajo/' + idSesion + '/acta/editar/' + idActa]);
  }

  listarAcuerdos(idActa: any, idSesion: any) {
    this.router.navigate(['/panel/seguimiento-de-acuerdos/' + idSesion + '/acta/' + idActa + '/acuerdos']);
  }
}
