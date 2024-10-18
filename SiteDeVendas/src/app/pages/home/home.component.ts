import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  // Elementos DOM que serão utilizados
  wrapper!: HTMLElement;
  loginLink!: HTMLElement;
  registerLink!: HTMLElement;
  btnPopup!: HTMLElement;
  iconClose!: HTMLElement;

  // Lista de itens
  items: any[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    // Obtém os itens do serviço
    this.items = this.produtosService.getItems();

    // Inicializa a currentImage para cada item
    this.items.forEach(item => {
      item.currentImage = item.images[0]; // Define a imagem atual como a primeira
    });

    // Seleciona elementos DOM

    // Adiciona event listeners

  }

  // Função para adicionar event listeners

  // Retorna a imagem atual do item
  currentImage(item: any): string {
    return item.currentImage;
  }

  // Troca a imagem atual ao passar o mouse
  onMouseEnter(item: any): void {
    if (item.images.length > 1) {
      item.currentImage = item.images[1]; // Troca para a segunda imagem
    }
  }

  // Retorna para a primeira imagem ao sair o mouse
  onMouseLeave(item: any): void {
    item.currentImage = item.images[0]; // Retorna para a primeira imagem
  }
}
