import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,
              public menuService: MenuService) {
  }

  ngOnInit() {
  }

  cerrar_sesion() {
    this.router.navigate(['sesion-externo']);
  }

}
