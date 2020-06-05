import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FirmanteRow} from '../../model/firmanteRow';
import {AcuerdoRow} from '../../model/acuerdoRow';
import {Location} from '@angular/common';
import {saveConfig} from '../../../../services/sweetAlertConfig';


@Component({
  selector: 'app-sesiones-acta-nuevo',
  templateUrl: './sesiones-acta-nuevo.component.html',
  styleUrls: ['./sesiones-acta-nuevo.component.scss']
})
export class SesionesActaNuevoComponent implements OnInit {

  acuerdosList: AcuerdoRow[] = [];
  firmanteList: FirmanteRow[] = [];


  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  sesionDeTrabajo: any;
  actaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: NgxSpinnerService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    console.log(' NUEVA ACTA *********');
    this.spinnerService.show();
    setTimeout(() => {

      // INICIA EL FORMUALRIO AQUI
      this.actaForm.setValue({
        numeroActa: 'ACT-0-2020-001',
        fechaActa: new Date(),
        adjuntoActa: ''
      });

      this.sesionDeTrabajo = {
        numeroSesion: '90898990',
        tipoSesion: '02',
        fechaSesion: new Date(),
        horaInicio: '3:00 pm',
        horaTermino: '4:00 pm',
      };
      this.spinnerService.hide();
    }, 800);

    this.actaForm = this.fb.group({
      numeroActa: ['', Validators.required],
      fechaActa: ['', Validators.required],
      adjuntoActa: [''],
    });

    this.actaForm.controls.numeroActa.disable();
    this.actaForm.controls.fechaActa.disable();
  }

  guardar() {
    console.log(this.firmanteList);
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig).then((result) => {
        this.router.navigate(['/panel/sesiones-de-trabajo']);
      });
    }, 800);
  }

  cancelar() {
    this.location.back();
  }


}
