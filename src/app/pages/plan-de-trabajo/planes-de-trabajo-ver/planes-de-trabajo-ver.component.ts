import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-planes-de-trabajo-ver',
  templateUrl: './planes-de-trabajo-ver.component.html',
  styleUrls: ['./planes-de-trabajo-ver.component.scss']
})
export class PlanesDeTrabajoVerComponent implements OnInit {

  private selectedfile: File;
  planDeTrabajoForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
    }, 800);

    this.planDeTrabajoForm = this.fb.group({
      codigo: ['', Validators.required],
      fechaAprobacion: ['', Validators.required],
      fechaInicioVigencia: ['', Validators.required],
      fechaFinVigencia: ['', Validators.required],
      documentoAprobacion: ['', Validators.required],
      adjuntoDocumentoAprobacion: [''],
      adjuntoPlanTrabajo: ['', Validators.required],
    });

    this.planDeTrabajoForm.setValue({
      codigo: '90898990',
      fechaAprobacion: 'DNI',
      fechaInicioVigencia: new Date(),
      fechaFinVigencia: new Date(),
      documentoAprobacion: 'AYALA',
      adjuntoDocumentoAprobacion: 'DocumentoAjunto000101.pdf',
      adjuntoPlanTrabajo: 'DocumentoAjunto000101_0002.pdf',
    });

    this.planDeTrabajoForm.disable();
  }
  cancelar() {
    this.router.navigate(['/panel/planes-de-trabajo']);
  }

}


