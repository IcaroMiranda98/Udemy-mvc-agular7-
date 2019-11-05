import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/Produto";
import { Options } from "selenium-webdriver/edge";

@Injectable({
    providedIn: "root"
})
export class ProdutoServico implements OnInit {

    public produtos: Produto[];
    public baseURL: string;
    private readonly _http: HttpClient;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this.baseURL = baseUrl;
      this._http = http;
    }

    ngOnInit(): void {
      this.produtos = [];
    }

    get headers(): HttpHeaders {
      return new HttpHeaders().set('content-type', 'application/json');
    }

    public listarProdutos(): Observable<Produto[]> {
      return this._http.get<Produto[]>(this.baseURL + "api/Produto");
    }

    public buscarProduto(produto: Produto): Observable<Produto> {

      return this._http.post<Produto>(this.baseURL + "api/Produto/Produto", JSON.stringify(produto), { headers: this.headers });

    }

    public cadastarProduto(produto: Produto): Observable<Produto> {
      const headers = new HttpHeaders().set('content-type', 'application/json');

      return this._http.post<Produto>(this.baseURL + "api/Produto", JSON.stringify(produto), { headers: this.headers });

    }
     
}

