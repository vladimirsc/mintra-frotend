import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {editConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-consejeros-editar',
  templateUrl: './consejeros-editar.component.html',
  styleUrls: ['./consejeros-editar.component.scss']
})
export class ConsejerosEditarComponent implements OnInit {


  documentosTipo = [
    {codigo: 'DNI', descripcion: 'Documento Nacional de Identidad'},
    {codigo: 'CE', descripcion: 'Carnet de Extranjeria'},
  ];

  entidades = [
    {codigo: '01', descripcion: 'SUNAT'},
    {codigo: '02', descripcion: 'MINSA'},
    {codigo: '03', descripcion: 'SUNAFIL'},
  ];

  private selectedfile: File;
  consejeroForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.consejeroForm = this.fb.group({
      numeroDocumento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      profesion: [''],
      email: ['', Validators.required],
      email2: [''],
      entidad: [''],
      tipo: [''],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      documentoDesginado: [''],
      adjunto: [''],
    });

    this.consejeroForm.setValue({
      numeroDocumento: '90898990',
      tipoDocumento: 'DNI',
      nombres: 'CESAR MARLES',
      apellidoPaterno: 'ZAMBRANO',
      apellidoMaterno: 'AYALA',
      profesion: 'JEFE DE OBRA',
      email: 'CESAR.ZAMBRANO@CGTP.COM',
      email2: '',
      entidad: '02',
      tipo: '1',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      documentoDesginado: 'ATP-00000120',
      adjunto: 'DocumentoAjunto000101,pdf',
    });
  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(editConfig).then((result) => {
        this.router.navigate(['/panel/consejeros']);
      });
    }, 800);
  }

  cancelar() {
    this.router.navigate(['/panel/consejeros']);
  }

  selectedFile(event) {
    this.selectedfile = event.target.files[0];
  }
}

