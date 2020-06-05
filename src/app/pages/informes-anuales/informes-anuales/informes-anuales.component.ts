import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';

interface InformeRow {

  id: number;
  numeroInforme: string;
  numeroSesion: string;
  fecha: string;
  documento: string;

}


@Component({
  selector: 'app-informes-anuales',
  templateUrl: './informes-anuales.component.html',
  styleUrls: ['./informes-anuales.component.scss']
})
export class InformesAnualesComponent implements OnInit {

  ELEMENT_DATA: InformeRow[] = [
    {
      id: 1,
      numeroInforme: 'INF-2020-01',
      numeroSesion: 'SES-2020-01',
      documento: 'DOC-2020-01',
      fecha: '21/02/2020',
    },
    {
      id: 2,
      numeroInforme: 'INF-2020-01',
      numeroSesion: 'SES-2020-01',
      documento: 'DOC-2020-01',
      fecha: '21/02/2020',
    },
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['nro', 'numeroInforme', 'numeroSesion', 'documento', 'fecha', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      numeroInforme: [''],
      numeroSesion: [''],
      numeroDocumento: [''],
      fechaInicio: [''],
      fechaFin: [''],
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/informes-anuales/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/informes-anuales/editar/' + id]);
  }

  eliminarRegistro(idInforme: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/informes-anuales/nuevo']);
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
}
