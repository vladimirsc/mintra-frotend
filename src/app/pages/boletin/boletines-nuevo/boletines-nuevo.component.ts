import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {saveConfig} from '../../../services/sweetAlertConfig';

@Component({
  selector: 'app-boletines-nuevo',
  templateUrl: './boletines-nuevo.component.html',
  styleUrls: ['./boletines-nuevo.component.scss']
})
export class BoletinesNuevoComponent implements OnInit {

  boletinForm: FormGroup;

  constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      // INICIA EL FORMUALRIO AQUI
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
      Swal.fire(saveConfig).then((result) => {
        this.router.navigate(['/panel/boletines']);
      });

    }, 800);

  }

  cancelar() {
    this.router.navigate(['/panel/boletines']);
  }
}
