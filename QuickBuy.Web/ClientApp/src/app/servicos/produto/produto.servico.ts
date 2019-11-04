import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/Produto";

@Injectable({
    providedIn: "root"
})
export class ProdutoServico{

    public produtos: Produto[];
    public baseURL: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl
    }



    http.get<Produto[]> (baseUrl + 'api/Produto').subscribe(result => {
        this.produtos = result;
    }, error => console.error(error));

}

