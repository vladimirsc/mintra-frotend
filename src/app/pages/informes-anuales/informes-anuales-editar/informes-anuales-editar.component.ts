import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {editConfig, saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-informes-anuales-editar',
  templateUrl: './informes-anuales-editar.component.html',
  styleUrls: ['./informes-anuales-editar.component.scss']
})
export class InformesAnualesEditarComponent implements OnInit {

  informeForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.informeForm = this.fb.group({
      numeroInforme: ['', Validators.required],
      numeroSesion: ['', Validators.required],
      fecha: ['', Validators.required],
      adjunto: ['', Validators.required],
    });

    setTimeout(() => {
      this.informeForm.setValue({
        numeroInforme: 'INF-2020-00001',
        numeroSesion: 'SES-2020-0002',
        fecha: new Date(),
        adjunto: null
      });
      this.spinnerService.hide();
    });
  }

  guardar() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(editConfig)
        .then((result) => {
          this.location.back();
        });
    }, 800);

  }

  cancelar() {
    this.location.back();
  }
}
