import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {deleteConfig} from '../../../services/sweetAlertConfig';

interface ConsejerRowResponse {

  id: number;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  entidad: string;
  documentoDesignado: string;
  fecha: string;

}

@Component({
  selector: 'app-consejeros',
  templateUrl: './consejeros.component.html',
  styleUrls: ['./consejeros.component.scss']
})
export class ConsejerosComponent implements OnInit {

  const;
  ELEMENT_DATA: ConsejerRowResponse[] = [
    {
      id: 1000,
      tipoDocumento: 'DNI',
      numeroDocumento: '30009898',
      nombres: 'CARLOS',
      apellidoPaterno: 'QUISPE',
      apellidoMaterno: 'ROJAS',
      entidad: 'SUNAT',
      documentoDesignado: 'RES-2545',
      fecha: '21/01/2020'
    },
  ];

  documentosTipo = [
    {codigo: 'DNI', descripcion: 'Documento Nacional de Identidad'},
    {codigo: 'CE', descripcion: 'Carnet de Extranjeria'},
  ];

  entidades = [
    {codigo: '01', descripcion: 'SUNAT'},
    {codigo: '02', descripcion: 'MINSA'},
    {codigo: '03', descripcion: 'SUNAFIL'},
  ];

  busquedaForm: FormGroup;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['nro', 'tipo', 'numero', 'nombres', 'apellidoPaterno', 'apellidoMaterno', 'entidad', 'documentoDesignado', 'fecha', 'ver', 'editar', 'eliminar'];

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.busquedaForm = this.fb.group({
      numeroDocumento: [''],
      tipoDocumento: [''],
      nombres: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      profesion: [''],
      email: [''],
      email2: [''],
      entidad: [''],
      tipo: [''],
      fechaInicio: [''],
      fechaFin: [''],
      documentoDesginacion: [''],
      adjunto: [''],
    });
  }

  verRegistro(id: any) {
    this.router.navigate(['/panel/consejeros/ver/' + id]);
  }

  editarRegistro(id: any) {
    this.router.navigate(['/panel/consejeros/editar/' + id]);
  }

  eliminarRegistro(codigoContrato: any) {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(deleteConfig);
    }, 800);
  }

  nuevoRegistro() {
    this.router.navigate(['/panel/consejeros/nuevo']);
  }
}
