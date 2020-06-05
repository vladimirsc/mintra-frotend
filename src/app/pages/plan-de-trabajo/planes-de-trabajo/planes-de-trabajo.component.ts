import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';

interface ConsejerRowResponse {

  id: number;
  codigoPT: string;
  documentoAprobacion: string;
  fechaAprobacion: string;
  fechaInicio: string;
  fechaFin: string;
  archivo: string;

}

@Component({
  selector: 'app-planes-de-trabajo',
  templateUrl: './planes-de-trabajo.component.html',
  styleUrls: ['./planes-de-trabajo.component.scss']
})
export class PlanesDeTrabajoComponent implements OnInit {


  const;
  ELEMENT_DATA: ConsejerRowResponse[] = [
    {
      id: 1000,
      codigoPT: '2020-01',
      documentoAprobacion: 'RES-0515',
      fechaAprobacion: '21/02/2020',
      fechaInicio: '20/01/2020',
      fechaFin: '21/01/2020',
      archivo: 'app.pdf'
    },
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['nro', 'codigoPT', 'documentoAprobacion', 'archivo', 'fechaAprobacion', 'fechaInicio', 'fechaFin', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      codigo: [''],
      fechaInicioAprobacion: [''],
      fechaFinAprobacion: [''],
      fechaInicioVigencia: [''],
      fechaFinVigencia: ['']
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/planes-de-trabajo/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/planes-de-trabajo/editar/' + id]);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/planes-de-trabajo/nuevo']);
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
