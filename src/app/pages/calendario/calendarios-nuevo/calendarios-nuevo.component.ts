import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig, saveConfig} from '../../../services/sweetAlertConfig';

interface ParticipanteRow {
  id: number;
  participa: boolean;
  nombres: string;
  tipoDocumento: string;
  numeroDocumento: string;
  entidad: string;
  email: string;
}

@Component({
  selector: 'app-calendarios-nuevo',
  templateUrl: './calendarios-nuevo.component.html',
  styleUrls: ['./calendarios-nuevo.component.scss']
})
export class CalendariosNuevoComponent implements OnInit {


  actividadForm: FormGroup;

  PARTICIPANTES: ParticipanteRow[] = [];

  dataSource = this.PARTICIPANTES;
  displayedColumns: string[] = ['nro', 'participa', 'nombres', 'tipoDocumento', 'numeroDocumento', 'entidad', 'email', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.actividadForm = this.fb.group({
      actividad: ['', Validators.required],
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
      fueEjecutado: ['', Validators.required],
      comentario: ['', Validators.required],
    });
  }

  guardar() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig).then((result) => {
        this.router.navigate(['/panel/calendarios']);
      });

    }, 800);

  }

  cancelar() {
    this.router.navigate(['/panel/calendarios']);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }
}
