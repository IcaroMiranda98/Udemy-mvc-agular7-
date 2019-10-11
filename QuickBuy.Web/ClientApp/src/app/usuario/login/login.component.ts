import { Component } from "@angular/core"
import { templateSourceUrl } from "@angular/compiler";
import { Usuario } from "../../modelo/Usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"] 
})

export class LoginComponent {

  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario;
  }

  entrar() {
    alert("Email: " + this.usuario.email + ", Senha: " + this.usuario.senha);
  }

}
