import { Component } from '@angular/core';

@Component({
    selector: 'app-produto-component',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
    public id: number;
    public nome: string;

    public obterNome() {
        return "Samsung";
    }

}
