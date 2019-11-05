import { Component, Inject } from '@angular/core';
import { Produto } from '../modelo/Produto'
import { HttpClient } from '@angular/common/http';
import { ProdutoServico } from '../servicos/produto/produto.servico';

@Component({
    selector: 'app-produto-component',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
 
  public produtos: Produto[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, produtoServico: ProdutoServico) {

    /*http.get<Produto[]>(baseUrl + 'api/Produto').subscribe(result => {
      this.produtos = result;
    }, error => console.error(error));*/

    produtoServico.listarProdutos().subscribe(produtos_json => { this.produtos = produtos_json });
  }

    public obterNome() {
        return "Samsung";
    }

}
