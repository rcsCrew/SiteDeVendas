import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  item: any = null; // Variável para armazenar o item selecionado
  quantidadeSelecionada: number = 1; // Inicializa com 1 ou outro valor padrão

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Pega o id da URL
      if (id) {
        // Procura o item pelo id
        this.item = this.produtosService.getItems().find(item => item.id === id);

        // Se o item não for encontrado, exiba um alerta ou faça o tratamento adequado
        if (!this.item) {
          console.error('Produto não encontrado');
          alert('Produto não encontrado');
        } else {
          // Inicializa currentImage com a primeira imagem
          this.item.currentImage = this.item.images[0]; // Certifique-se de que existe ao menos uma imagem
        }
      }
    });
  }

  selecionarTamanho(tamanho: string) {
    this.item.tamanhoSelecionado = tamanho; // Atualiza a propriedade do item
  }

  selecionarCor(cor: string) {
    this.item.corSelecionada = cor; // Atualiza a propriedade do item
  }

}
