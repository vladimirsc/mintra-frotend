import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-consejeros-nuevo',
  templateUrl: './consejeros-nuevo.component.html',
  styleUrls: ['./consejeros-nuevo.component.scss']
})
export class ConsejerosNuevoComponent implements OnInit {

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
      adjunto: ['', Validators.required],
    });
  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig).then((result) => {
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
