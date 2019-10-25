import { Component, OnInit } from "@angular/core"
import { templateSourceUrl } from "@angular/compiler";
import { Usuario } from "../../modelo/Usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"] 
})

export class LoginComponent implements OnInit {
    public usuario: Usuario;
    public returnUrl: string;
    public mensagem: string;
    public logando: boolean;


    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private usuarioservico: UsuarioServico) {
    }

    ngOnInit(): void {
       this.usuario = new Usuario;
       this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
    }

    entrar() {
        this.logando = true;
        this.usuarioservico.validarLogin(this.usuario)
            .subscribe(
                usuario_json => {

                    this.usuarioservico.usuario = usuario_json;

                    if (this.returnUrl == null)
                        this.returnUrl = "";

                    this.router.navigate(['/' + this.returnUrl]);
                },
                err => {
                    this.mensagem = err.error;
                    this.logando = false;
                }
            );
    }
    
    sair() {
        sessionStorage.setItem("usuario_autenticado", "");
    }

}
