import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/Usuario";

@Injectable({
    providedIn: "root"
})
export class UsuarioServico {
    private baseURL: string;
    private _usuario: Usuario;

    set usuario(usuario: Usuario) {
        sessionStorage.setItem("usuario_autenticado", JSON.stringify(usuario));
        this._usuario = usuario;
    }

    get usuario(): Usuario {
        let usuario_json = sessionStorage.getItem("usuario_autenticado");
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl;
    }

    public validarLogin(usuario: Usuario): Observable<Usuario> {
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: usuario.email,
            senha: usuario.senha
        };

        return this.http.post<Usuario>(this.baseURL + "api/usuario/ValidarLogin", body, { headers });
    }

    public sair(){
        sessionStorage.setItem("usuario_autenticado", "");
        this._usuario = null;
    }

    public usuarioLogado():boolean{
      return this._usuario != null;
    }
}
