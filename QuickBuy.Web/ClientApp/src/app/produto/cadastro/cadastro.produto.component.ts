import { Component, Inject } from '@angular/core';
import { Produto } from '../../modelo/Produto'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-produtocadastro-component',
    templateUrl: './cadastro.produto.component.html'
})
export class CadastroProdutoComponent {
 
  public produtos: Produto[]; 

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Produto[]>(baseUrl + 'api/Produto').subscribe(result => {
      this.produtos = result;
    }, error => console.error(error));
  }
 
}
