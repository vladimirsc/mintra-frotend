import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig, editConfig} from '../../../services/sweetAlertConfig';


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
  selector: 'app-calendarios-editar',
  templateUrl: './calendarios-editar.component.html',
  styleUrls: ['./calendarios-editar.component.scss']
})
export class CalendariosEditarComponent implements OnInit {


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
  displayedColumns: string[] = ['nro', 'participa', 'nombres', 'tipoDocumento', 'numeroDocumento', 'entidad', 'email', 'eliminar'];


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
      Swal.fire(editConfig).then((result) => {
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
