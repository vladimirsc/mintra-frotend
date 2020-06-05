import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';
import { Boletines } from '../boletines';


interface ConsejerRowResponse {

  id: number;
  numeroBoletin: string;
  fecha: string;

}

@Component({
  selector: 'app-boletines',
  templateUrl: './boletines.component.html',
  styleUrls: ['./boletines.component.scss']
})
export class BoletinesComponent implements OnInit {



  const;
  ELEMENT_DATA: ConsejerRowResponse[] = [
    {
      id: 1,
      numeroBoletin: 'BOL-2020-01',
      fecha: '21/02/2020',
    },
    {
      id: 2,
      numeroBoletin: 'BOL-2020-02',
      fecha: '20/08/2020',
    },
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['item', 'numeroBoletin', 'fecha', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      numeroBoletin: [''],
      fechaInicioBoletin: [''],
      fechaFinBoletin: [''],
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/boletines/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/boletines/editar/' + id]);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/boletines/nuevo']);
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
