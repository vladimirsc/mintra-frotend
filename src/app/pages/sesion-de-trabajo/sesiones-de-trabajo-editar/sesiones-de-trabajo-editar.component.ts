import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {editConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-sesiones-de-trabajo-editar',
  templateUrl: './sesiones-de-trabajo-editar.component.html',
  styleUrls: ['./sesiones-de-trabajo-editar.component.scss']
})
export class SesionesDeTrabajoEditarComponent implements OnInit {

  sesionesTipo = [
    {codigo: 1, descripcion: 'Ordinaria'},
    {codigo: 2, descripcion: 'Extraordinaria'},
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

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI

      this.sesionDeTrabajoForm.setValue({
        numeroSesion: '90898990',
        tipoSesion: 2,
        fechaSesion: new Date(),
        horaInicio: '3:00 pm',
        horaTermino: '4:00 pm',
      });
    }, 800);

  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(editConfig).then((result) => {
        this.router.navigate(['/panel/sesiones-de-trabajo']);
      });
    }, 800);
  }

  cancelar() {
    this.router.navigate(['/panel/sesiones-de-trabajo']);
  }
}
