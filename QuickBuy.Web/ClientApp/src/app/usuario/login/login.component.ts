import { Component, OnInit } from "@angular/core"
import { templateSourceUrl } from "@angular/compiler";
import { Usuario } from "../../modelo/Usuario";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"] 
})

export class LoginComponent implements OnInit {
    public usuario: Usuario;
    public returnUrl: string;


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
       this.usuario = new Usuario;
       this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
    }

    entrar() {
        if (this.usuario.email == "icaro@gmail.com" && this.usuario.senha == "123456") {
            sessionStorage.setItem("usuario_autenticado", "1");

            if (this.returnUrl == null)
                this.returnUrl = "";
            
            this.router.navigate(['/' + this.returnUrl ]);
        }
    }
    sair() {
        sessionStorage.setItem("usuario_autenticado", "");
    }

}
