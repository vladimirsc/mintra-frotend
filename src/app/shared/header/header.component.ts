import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Plataforma Virtual del Consejo de Seguridad y Salud en el Trabajo';

  constructor() { }

  ngOnInit() {
  }

}
