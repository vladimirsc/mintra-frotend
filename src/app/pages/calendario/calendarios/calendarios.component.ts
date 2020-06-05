import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';
import {deleteConfig} from '../../../services/sweetAlertConfig';


interface ConsejerRowResponse {

  id: number;
  actividad: string;
  fechaActividad: string;
  horaInicio: string;
  horaFin: string;
  fueEjecutado: string;
  fechaEjecucion: string;

}

@Component({
  selector: 'app-calendarios',
  templateUrl: './calendarios.component.html',
  styleUrls: ['./calendarios.component.scss']
})
export class CalendariosComponent implements OnInit {


  ELEMENT_DATA: ConsejerRowResponse[] = [
    {
      id: 1,
      actividad: 'ACT-2020-01',
      fechaActividad: '21/02/2020',
      horaInicio: '3:00PM',
      horaFin: '4:00PM',
      fueEjecutado: 'SI',
      fechaEjecucion: '21/02/2020',
    }
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['item', 'actividad', 'fechaActividad', 'horaInicio', 'horaFin', 'fueEjecutado', 'fechaEjecucion', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      actividad: [''],
      fechaInicioActividad: [''],
      fechaFinActividad: [''],
      fueEjecutado: [''],
      fechaEjecucionActividad: [''],
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/calendarios/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/calendarios/editar/' + id]);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/calendarios/nuevo']);
  }

}
