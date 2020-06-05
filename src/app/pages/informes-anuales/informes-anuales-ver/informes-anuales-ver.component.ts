import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {editConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-informes-anuales-ver',
  templateUrl: './informes-anuales-ver.component.html',
  styleUrls: ['./informes-anuales-ver.component.scss']
})
export class InformesAnualesVerComponent implements OnInit {

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
    this.informeForm.disable();
    setTimeout(() => {
      this.informeForm.setValue({
        numeroInforme: 'INF-2020-00001',
        numeroSesion: 'SES-2020-0002',
        fecha: new Date(),
        adjunto: 'nuevo_documento_200.pdf'
      });
      this.spinnerService.hide();
    });
  }

  cancelar() {
    this.location.back();
  }
}
