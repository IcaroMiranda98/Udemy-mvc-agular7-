import { Component, Inject } from '@angular/core';
import { Produto } from '../modelo/Produto'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-produto-component',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
 
  public produtos: Produto[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Produto[]>(baseUrl + 'api/Produto').subscribe(result => {
      this.produtos = result;
    }, error => console.error(error));
  }

    public obterNome() {
        return "Samsung";
    }

}
