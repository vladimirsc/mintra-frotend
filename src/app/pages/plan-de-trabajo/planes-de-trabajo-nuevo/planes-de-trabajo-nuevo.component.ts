import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-planes-de-trabajo-nuevo',
  templateUrl: './planes-de-trabajo-nuevo.component.html',
  styleUrls: ['./planes-de-trabajo-nuevo.component.scss']
})
export class PlanesDeTrabajoNuevoComponent implements OnInit {

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
  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig).then((result) => {
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
