import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {editConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-boletines-editar',
  templateUrl: './boletines-editar.component.html',
  styleUrls: ['./boletines-editar.component.scss']
})
export class BoletinesEditarComponent implements OnInit {


  boletinForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI

      this.boletinForm.setValue({
        numeroBoletin: 'BOL-2020-00001',
        fecha: new Date(),
        adjunto: 'DocumentoAjunto000101_0002,pdf',
      });


    }, 800);

    this.boletinForm = this.fb.group({
      numeroBoletin: ['', Validators.required],
      fecha: ['', Validators.required],
      adjunto: ['', Validators.required],
    });
  }

  guardar() {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      Swal.fire(editConfig).then((result) => {
        this.router.navigate(['/panel/boletines']);
      });

    }, 800);


  }

  cancelar() {
    this.router.navigate(['/panel/boletines']);

  }

}
