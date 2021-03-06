import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    constructor(private router: Router, private usuarioServico: UsuarioServico) { }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  usuarioLogado(): boolean {
      return this.usuarioServico.usuarioLogado();
  }

  sair() {
      this.usuarioServico.sair();
      this.router.navigate(["/"]);
  }

}
