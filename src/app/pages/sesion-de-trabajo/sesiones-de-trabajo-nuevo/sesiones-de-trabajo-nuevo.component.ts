import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-sesiones-de-trabajo-nuevo',
  templateUrl: './sesiones-de-trabajo-nuevo.component.html',
  styleUrls: ['./sesiones-de-trabajo-nuevo.component.scss']
})
export class SesionesDeTrabajoNuevoComponent implements OnInit {

  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  sesionDeTrabajoForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.sesionDeTrabajoForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaSesion: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
    });
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
