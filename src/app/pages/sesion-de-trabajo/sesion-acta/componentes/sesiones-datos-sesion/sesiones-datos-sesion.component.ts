import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sesiones-datos-sesion',
  templateUrl: './sesiones-datos-sesion.component.html',
  styleUrls: ['./sesiones-datos-sesion.component.scss']
})
export class SesionesDatosSesionComponent implements OnInit, OnChanges {
  sesionesTipo = [
    {codigo: '01', descripcion: 'Ordinaria'},
    {codigo: '02', descripcion: 'Extraordinaria'},
  ];

  @Input()
  sesionDeTrabajo: any;

  @Output() guardarEmit = new EventEmitter();
  @Output() cancelarEmit = new EventEmitter();


  sesionDeTrabajoForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // INICIA EL FORMUALRIO AQUI
    if (changes.sesionDeTrabajo.currentValue) {
      this.sesionDeTrabajoForm.setValue({
        numeroSesion: this.sesionDeTrabajo.numeroSesion,
        tipoSesion: this.sesionDeTrabajo.tipoSesion,
        fechaSesion: this.sesionDeTrabajo.fechaSesion,
        horaInicio: this.sesionDeTrabajo.horaInicio,
        horaTermino: this.sesionDeTrabajo.horaTermino,
      });
    }
  }

  ngOnInit() {

    this.sesionDeTrabajoForm = this.fb.group({
      numeroSesion: ['', Validators.required],
      tipoSesion: ['', Validators.required],
      fechaSesion: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
    });
    this.sesionDeTrabajoForm.disable();

  }

  cancelar() {
    this.cancelarEmit.emit();
  }

  guardar() {
    this.guardarEmit.emit();
  }
}
