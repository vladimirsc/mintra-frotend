import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {editConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-planes-de-trabajo-editar',
  templateUrl: './planes-de-trabajo-editar.component.html',
  styleUrls: ['./planes-de-trabajo-editar.component.scss']
})
export class PlanesDeTrabajoEditarComponent implements OnInit {

  private selectedfile: File;
  private selectedfile2: File;
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
      adjuntoDocumentoAprobacion: 'DocumentoAjunto000101,pdf',
      adjuntoPlanTrabajo: 'DocumentoAjunto000101_0002,pdf',
    });
  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(editConfig).then((result) => {
        this.router.navigate(['/panel/planes-de-trabajo']);
      });
    }, 800);
  }

  cancelar() {
    this.router.navigate(['/panel/planes-de-trabajo']);
  }

  selectedFileDocPlanDeTrabajo($event) {
    this.selectedfile = $event.target.files[0];

  }

  selectedFileDocAprobacion($event) {
    this.selectedfile2 = $event.target.files[0];

  }
}
