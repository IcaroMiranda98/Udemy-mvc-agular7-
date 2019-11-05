import { Component, Inject, OnInit } from '@angular/core';
import { Produto } from '../../modelo/Produto'
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';

@Component({
    selector: 'app-produtocadastro-component',
    templateUrl: './cadastro.produto.component.html'
})
export class CadastroProdutoComponent implements OnInit {

    public produtos: Produto[];
    public produto: Produto;
    public processando: boolean;

    constructor(private produtoServico: ProdutoServico, private router: Router) {
    }

    ngOnInit(): void {
        this.produtos = [];
        this.produto = new Produto();
        this.processando = false;
    }

    public cadastrar() {

        this.processando = true;

        if (this.produto.nome == null || this.produto.descricao == null || this.produto.preco == null){
            alert("Cadastro inválido");
            this.processando = false;
            return;
        }

        this.produtoServico.cadastarProduto(this.produto);

        this.router.navigate(['/produto']) 

        alert("Nome: " + this.produto.nome + " Descrição: " + this.produto.descricao + " Preço:" + this.produto.preco);
        this.processando = false;
    }


  /*constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Produto[]>(baseUrl + 'api/Produto').subscribe(result => {
      this.produtos = result;
    }, error => console.error(error));
    }*/




 
}
