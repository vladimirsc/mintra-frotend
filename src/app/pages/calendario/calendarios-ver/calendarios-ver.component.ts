import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';

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
  selector: 'app-calendarios-ver',
  templateUrl: './calendarios-ver.component.html',
  styleUrls: ['./calendarios-ver.component.scss']
})
export class CalendariosVerComponent implements OnInit {


  actividadForm: FormGroup;

  PARTICIPANTES: ParticipanteRow[] = [
    {
      id: 1,
      participa: true,
      nombres: 'LUIS CORTZ CABALLERO',
      tipoDocumento: 'DNI',
      numeroDocumento: '90009876',
      entidad: 'SUNAT',
      email: 'luis.cortex@gmail.com',
    }
  ];

  dataSource = this.PARTICIPANTES;
  displayedColumns: string[] = ['nro', 'participa', 'nombres', 'tipoDocumento', 'numeroDocumento', 'entidad', 'email'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI

      this.actividadForm.setValue({
        actividad: 'VOLUNTARIADO SERVIR',
        fecha: new Date(),
        horaInicio: '3:00 PM',
        horaTermino: '4:00 PM',
        fueEjecutado: true,
        comentario: 'La actividad se realizó en presencia el secretario general',
      });
      this.actividadForm.disable();
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
