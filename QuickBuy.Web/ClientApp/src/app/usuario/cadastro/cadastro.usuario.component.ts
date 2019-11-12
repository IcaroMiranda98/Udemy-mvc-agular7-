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
    public mensagem: string;
    public ativarSpinner: boolean;

    constructor(private usuarioServico: UsuarioServico, private router: Router){

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.ativarSpinner = false;
    } 

    cadastrar(): void {
      this.ativarSpinner = true;
      this.mensagem = null;


      this.usuarioServico.cadastrarUsuario(this.usuario)
          .subscribe(novoUsuario => {
            if (novoUsuario.id != null) {

              this.usuario = novoUsuario;
              this.mensagem = "Usuário cadastrado com suceso."
              this.ativarSpinner = false;
            }
          },
          e => {
              this.mensagem = e.error;
              this.ativarSpinner = false;
          })

      //alert("Email: " + this.usuario.email + " Nome: " + this.usuario.nome + " " + this.usuario.sobreNome);
    }

}
