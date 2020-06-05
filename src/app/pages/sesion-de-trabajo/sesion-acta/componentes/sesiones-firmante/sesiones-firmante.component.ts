import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material';
import {FirmanteRow} from '../../../model/firmanteRow';
import Swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-sesiones-firmante',
  templateUrl: './sesiones-firmante.component.html',
  styleUrls: ['./sesiones-firmante.component.scss']
})
export class SesionesFirmanteComponent implements OnInit {

  @Input()
  firmanteList: FirmanteRow[];

  columnas: string[] = ['item', 'asistio', 'tipoDocumento', 'numeroDocumento', 'nombres', 'tipo', 'entidad', 'eliminar'];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(private spinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
    if (this.firmanteList.length > 0) {
      this.table.renderRows();
    }
  }

  agregarFirrmante() {
  }

  eliminarFirmante(index: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.firmanteList.splice(index, 1);
      this.table.renderRows();
      this.spinnerService.hide();
      Swal.fire({
        title: 'Eliminación!',
        text: 'Se eliminó el registro correctamnete el ' + index,
        confirmButtonText: 'Continuar'
      });
    }, 800);
  }
}
