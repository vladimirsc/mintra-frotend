import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import {saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-informes-anuales-nuevo',
  templateUrl: './informes-anuales-nuevo.component.html',
  styleUrls: ['./informes-anuales-nuevo.component.scss']
})
export class InformesAnualesNuevoComponent implements OnInit {


  informeForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.informeForm = this.fb.group({
      numeroInforme: ['', Validators.required],
      numeroSesion: ['', Validators.required],
      fecha: ['', Validators.required],
      adjunto: ['', Validators.required],
    });
  }

  guardar() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(saveConfig)
        .then((result) => {
          this.location.back();
        });
    }, 800);

  }

  cancelar() {
    this.location.back();
  }
}
