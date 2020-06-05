import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import {saveConfig} from '../../../../services/sweetAlertConfig';

interface TemaRow {
  id: number;
  tipo: string;
  descripcion: string;
  adjunto1: boolean;
  adjunto2: boolean;
  adjunto3: boolean;
}


@Component({
  selector: 'app-sesiones-tema-nuevo',
  templateUrl: './sesiones-tema-nuevo.component.html',
  styleUrls: ['./sesiones-tema-nuevo.component.scss']
})
export class SesionesTemaNuevoComponent implements OnInit {

  TEMAS: TemaRow[] = [
    {
      id: 1,
      tipo: 'INFORME',
      descripcion: 'TEMA PRUEBA 1',
      adjunto1: false,
      adjunto2: true,
      adjunto3: true,
    }
  ];

  dataSource = this.TEMAS;
  displayedColumns: string[] = ['item', 'tipo', 'descripcion', 'adjunto1', 'adjunto2', 'adjunto3', 'eliminar'];

  tiposSesion = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  tiposTema = [
    {codigo: '01', descripcion: '(I)nforme'},
    {codigo: '02', descripcion: '(P)edido'},
    {codigo: '03', descripcion: '(O)rdern del día'},
  ];

  sesionDeTrabajoForm: FormGroup;
  temaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: NgxSpinnerService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI

      this.sesionDeTrabajoForm.setValue({
        numeroSesion: '90898990',
        tipoSesion: '02',
        fechaSesion: new Date(),
        horaInicio: '3:00 pm',
        horaTermino: '4:00 pm',
      });

      this.sesionDeTrabajoForm.disable();
    }, 800);

    this.sesionDeTrabajoForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaSesion: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
    });

    this.temaForm = this.fb.group({
      tipoTema: ['', Validators.required],
      descripcion: ['', Validators.required],
      adjunto1: [''],
      adjunto2: [''],
      adjunto3: [''],
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
    this.location.back();
  }

  eliminarRowTema(idTema: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire({
        title: 'Eliminación!',
        text: 'Se eliminó el registro correctamnete.',
        confirmButtonText: 'Continuar'
      });
    }, 800);
  }

}
