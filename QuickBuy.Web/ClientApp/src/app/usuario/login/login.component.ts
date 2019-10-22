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


    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private usuarioservico: UsuarioServico) {
    }

    ngOnInit(): void {
       this.usuario = new Usuario;
       this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
    }

    entrar() {
        this.usuarioservico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {

                    this.usuarioservico.usuario = usuario_json;

                    /*sessionStorage.setItem("usuario_autenticado", "1");
                    sessionStorage.setItem("email_usuario", this.usuario.email);*/

                    if (this.returnUrl == null)
                        this.returnUrl = "";

                    this.router.navigate(['/' + this.returnUrl]);
                },
                err => {
                    this.mensagem = err.error;
                }
            );

        /*if (this.usuario.email == "icaro@gmail.com" && this.usuario.senha == "123456") {
            sessionStorage.setItem("usuario_autenticado", "1");

            if (this.returnUrl == null)
                this.returnUrl = "";
            
            this.router.navigate(['/' + this.returnUrl ]);
        }*/
    }
    
    sair() {
        sessionStorage.setItem("usuario_autenticado", "");
    }

}
