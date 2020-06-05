import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AcuerdoRow} from '../../../model/acuerdoRow';
import Swal from 'sweetalert2';
import {DatePipe} from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-sesiones-acuerdo',
  templateUrl: './sesiones-acuerdo.component.html',
  styleUrls: ['./sesiones-acuerdo.component.scss']
})
export class SesionesAcuerdoComponent implements OnInit {

  @Input()
  acuerdosForm: FormGroup;

  @Input()
  acuerdosList: AcuerdoRow[];

  columnas: string[] = ['item', 'descripcion', 'responsable', 'entidad', 'fechaLimite', 'eliminar'];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(private spinnerService: NgxSpinnerService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.acuerdosForm = this.fb.group({
      descripcion: ['', Validators.required],
      responsable: ['', Validators.required],
      entidad: ['', Validators.required],
      fechaLimite: ['', Validators.required],
    });
    if (this.acuerdosList.length > 0) {
      this.table.renderRows();
    }
  }

  eliminarRowAcuerdo(index: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.acuerdosList.splice(index, 1);
      this.table.renderRows();
      this.spinnerService.hide();
      Swal.fire({
        title: 'Eliminación!',
        text: 'Se eliminó el registro correctamnete el ' + index,
        confirmButtonText: 'Continuar'
      });
    }, 800);
  }

  agregarAcuerdo(acuerdosForm: FormGroup) {
    const pipe = new DatePipe('en-US');
    const now = acuerdosForm.controls.fechaLimite.value;
    const fechaLimite = pipe.transform(now, 'shortDate');

    const row = {
      descripcion: acuerdosForm.controls.descripcion.value,
      responsable: acuerdosForm.controls.responsable.value,
      entidad: acuerdosForm.controls.entidad.value,
      fechaLimite: fechaLimite.toString()
    };
    this.acuerdosList.push(row);
    this.table.renderRows();
  }

}
