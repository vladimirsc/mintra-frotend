import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccionRow} from '../../models/accionRow';
import {MatTable} from '@angular/material';
import {FileInput} from 'ngx-material-file-input';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../../services/sweetAlertConfig';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-accion-realizada',
  templateUrl: './accion-realizada.component.html',
  styleUrls: ['./accion-realizada.component.scss']
})
export class AccionRealizadaComponent implements OnInit, OnChanges {

  @Input()
  accionList: AccionRow[];

  accionRealizadaForm: FormGroup;

  displayedColumns: string[] = ['nro', 'acciones', 'responsable', 'registro', 'archivo', 'ejecuto', 'fecha', 'eliminar'];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
    this.accionRealizadaForm = this.fb.group({
      accionDescripcion: ['', Validators.required],
      responsable: ['', Validators.required],
      entidad: ['', Validators.required],
      fechaEjecutara: ['', Validators.required],
      fueEjecutado: [''],
      fechaEjecuto: ['', Validators.required],
      adjunto: ['', Validators.required],
    });
  }

  agregarAccion() {
    this.accionRealizadaForm.markAllAsTouched();
    if (this.accionRealizadaForm.invalid) {
      return;
    }
    const data: AccionRow = {
      acciones: this.accionRealizadaForm.controls.accionDescripcion.value,
      responsable: this.accionRealizadaForm.controls.responsable.value,
      registro: new Date().toISOString(),
      archivo: this.getFilename(this.accionRealizadaForm.controls.adjunto.value),
      ejecuto: this.accionRealizadaForm.controls.fueEjecutado.value,
      fecha: this.getStringFroDate(this.accionRealizadaForm.controls.fechaEjecuto.value)
    };

    this.accionList.push(data);
    this.table.renderRows();
    this.accionRealizadaForm.reset();
    this.accionRealizadaForm.markAsTouched({onlySelf: false});

  }

  getFilename(file: FileInput) {
    console.log(file);
    if (file != undefined && file.files != undefined && file.files.length > 0) {
      return file.files[0].name;
    } else {
      return '';
    }
  }

  getStringFroDate(fecha) {
    return fecha != undefined ? fecha.toLocaleString() : '';
  }

  eliminarAccion(id: any) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }
}
