import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatTable} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

interface AcuerdoRow {
  id: number,
  tema: string;
  responsable: string;
  entidad: string;
}

@Component({
  selector: 'app-seguimiento-acuerdos-por-acta',
  templateUrl: './seguimiento-acuerdos-por-acta.component.html',
  styleUrls: ['./seguimiento-acuerdos-por-acta.component.scss']
})
export class SeguimientoAcuerdosPorActaComponent implements OnInit {

  busquedaForm: FormGroup;

  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  acuerdosList: AcuerdoRow[] = [];
  columnas: string[] = ['item', 'tema', 'responsable', 'entidad', 'accion'];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  idSesion: string;
  idActa: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.busquedaForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      numeroActa: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaActa: ['', Validators.required],
    });
    this.loadDEfaultData();
    this.busquedaForm.disable();
    this.idSesion = this.route.snapshot.params['idSesion'];
    this.idActa = this.route.snapshot.params['idActa'];
  }

  loadDEfaultData() {
    this.spinner.show();
    setTimeout(() => {
      this.busquedaForm.setValue({
        numeroSesion: '0-20-90898990',
        numeroActa: 'ACTA-2020-90898990',
        tipoSesion: '02',
        fechaActa: new Date()
      });

      this.acuerdosList.push({
        id: 1001,
        tema: 'ACUERDO 1 CON DESCRIPCIÓN GENÉRICA',
        responsable: 'CARLOA AZUSTRE',
        entidad: 'SUNAT'
      });
      this.acuerdosList.push({
        id: 1002,
        tema: 'ACUERDO 2 CON DESCRIPCIÓN GENÉRICA',
        responsable: 'PEPE LUNA',
        entidad: 'ONPE'
      });
      this.acuerdosList.push({
        id: 1003,
        tema: 'ACUERDO 3 CON DESCRIPCIÓN GENÉRICA',
        responsable: 'CARLOS OLIVARES',
        entidad: 'SUNAT'
      });
      this.table.renderRows();
      this.spinner.hide();
    }, 800);
  }

  cancelar() {
    this.location.back();
  }

  agergarAccion(idAcuerdo: any) {
    this.router.navigate(['/panel/seguimiento-de-acuerdos/' + this.idSesion + '/acta/' + this.idActa + '/acuerdo/' + idAcuerdo + '/accion/nuevo']);
  }
}
