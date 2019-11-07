import { Component, OnInit } from "@angular/core"
import { templateSourceUrl } from "@angular/compiler";
import { Usuario } from "../../modelo/Usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;

    constructor(private usuarioServico: UsuarioServico, private router: Router){

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    cadastrar(): void {
        
      if (this.usuarioServico.cadastrarUsuario(this.usuario)) {
        this.router.navigate(['/'] );
      }
        alert("Email: " + this.usuario.email + " Nome: " + this.usuario.nome + " " + this.usuario.sobreNome);
    }

}
