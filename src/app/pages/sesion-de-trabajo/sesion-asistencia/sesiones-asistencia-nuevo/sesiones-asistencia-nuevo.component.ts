import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {saveConfig} from '../../../../services/sweetAlertConfig';

interface ParticipanteRow {
  id: number;
  participa: boolean;
  tipoDocumento: string,
  numero: string;
  nombres: string;
  entidad: string;
  entrada: string;
  salida: string;
}


@Component({
  selector: 'app-sesiones-asistencia-nuevo',
  templateUrl: './sesiones-asistencia-nuevo.component.html',
  styleUrls: ['./sesiones-asistencia-nuevo.component.scss']
})
export class SesionesAsistenciaNuevoComponent implements OnInit {


  PARTICIPANTES: ParticipanteRow[] = [
    {
      id: 1,
      participa: true,
      tipoDocumento: 'DNI',
      numero: '90009876',
      nombres: 'LUIS CORTZ CABALLERO',
      entidad: 'SUNAT',
      entrada: '3:00 PM',
      salida: '4:00 PM',
    }
  ];

  dataSource = this.PARTICIPANTES;
  displayedColumns: string[] = ['item', 'participa', 'tipoDocumento', 'numero', 'nombres', 'entidad', 'entrada', 'salida'];

  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  sesionDeTrabajoForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.sesionDeTrabajoForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaSesion: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
    });
    this.sesionDeTrabajoForm.disable();
    this.loadDatosDeSesion();
  }

  loadDatosDeSesion() {
    this.spinnerService.show();
    setTimeout(() => {
      // INICIA EL FORMUALRIO AQUI
      this.sesionDeTrabajoForm.setValue({
        numeroSesion: '90898990',
        tipoSesion: '02',
        fechaSesion: new Date(),
        horaInicio: '3:00 pm',
        horaTermino: '4:00 pm',
      });
      this.spinnerService.hide();
    }, 800);
  }

  guardar() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig).then((result) => {
        this.router.navigate(['/panel/sesiones-de-trabajo']);
      });

    }, 800);


  }

  cancelar() {
    this.router.navigate(['/panel/sesiones-de-trabajo']);

  }


}
