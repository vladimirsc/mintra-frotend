import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-datos-de-sesion',
  templateUrl: './datos-de-sesion.component.html',
  styleUrls: ['./datos-de-sesion.component.scss']
})
export class DatosDeSesionComponent implements OnInit, OnChanges {

  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  sesionDeTrabajoForm: FormGroup;

  @Input()
  sesionDeTrabajo: any;

  @Output()
  cancelarEmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.sesionDeTrabajo.currentValue) {
      this.sesionDeTrabajoForm.setValue({
        numeroSesion: this.sesionDeTrabajo.numeroSesion,
        numeroActa: this.sesionDeTrabajo.numeroActa,
        tipoSesion: this.sesionDeTrabajo.tipoSesion,
        fechaActa: this.sesionDeTrabajo.fechaActa,
        acuerdo: this.sesionDeTrabajo.acuerdo,
        responsable: this.sesionDeTrabajo.responsable,
        entidad: this.sesionDeTrabajo.entidad,
        fechaAtencion: this.sesionDeTrabajo.fechaAtencion,
      });
    }
  }

  ngOnInit() {
    console.log(this.sesionDeTrabajo);
    this.sesionDeTrabajoForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      numeroActa: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaActa: ['', Validators.required],
      acuerdo: ['', Validators.required],
      responsable: ['', Validators.required],
      entidad: ['', Validators.required],
      fechaAtencion: ['', Validators.required],
    });
    this.sesionDeTrabajoForm.controls.numeroSesion.disable();
    this.sesionDeTrabajoForm.controls.numeroActa.disable();
    this.sesionDeTrabajoForm.controls.tipoSesion.disable();
    this.sesionDeTrabajoForm.controls.fechaActa.disable();
    this.sesionDeTrabajoForm.controls.acuerdo.disable();
  }

  cancelar() {
    this.cancelarEmit.emit();
  }

}
