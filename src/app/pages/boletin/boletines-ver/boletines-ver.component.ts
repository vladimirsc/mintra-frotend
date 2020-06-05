import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boletines-ver',
  templateUrl: './boletines-ver.component.html',
  styleUrls: ['./boletines-ver.component.scss']
})
export class BoletinesVerComponent implements OnInit {

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
      this.boletinForm.disable();


    }, 800);

    this.boletinForm = this.fb.group({
      numeroBoletin: ['', Validators.required],
      fecha: ['', Validators.required],
      adjunto: ['', Validators.required],
    });
  }

  cancelar() {
    this.router.navigate(['/panel/boletines']);

  }
}
