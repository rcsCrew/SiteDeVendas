import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  wrapper!: HTMLElement;
  loginLink!: HTMLElement;
  registerLink!: HTMLElement;
  btnPopup!: HTMLElement;
  iconClose!: HTMLElement;

  items: any[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.items = this.produtosService.getItems();

    // Inicializa a currentImage para cada item
    this.items.forEach(item => {
      item.currentImage = item.images[0]; // Define a imagem atual para a primeira imagem
    });

    this.wrapper = document.querySelector('.wrapper') as HTMLElement;
    this.loginLink = document.querySelector('.login-link') as HTMLElement;
    this.registerLink = document.querySelector('.register-link') as HTMLElement;
    this.btnPopup = document.querySelector('.btnLogin') as HTMLElement;
    this.iconClose = document.querySelector('.icon-close') as HTMLElement;

    // Adicionando event listeners
    if (this.registerLink) {
      this.registerLink.addEventListener('click', () => {
        this.wrapper.classList.add('active');
      });
    }

    if (this.loginLink) {
      this.loginLink.addEventListener('click', () => {
        this.wrapper.classList.remove('active');
      });
    }

    if (this.btnPopup) {
      this.btnPopup.addEventListener('click', () => {
        this.wrapper.classList.add('active-popup');
      });
    }

    if (this.iconClose) {
      this.iconClose.addEventListener('click', () => {
        this.wrapper.classList.remove('active-popup');
      });
    }
  }

  currentImage(item: any): string {
    // Retorna a imagem atual do item
    return item.currentImage;
  }

  onMouseEnter(item: any): void {
    // Se houver uma segunda imagem, troca para ela
    if (item.images.length > 1) {
      item.currentImage = item.images[1]; // Troca para a segunda imagem
    }
  }

  onMouseLeave(item: any): void {
    // Retorna para a primeira imagem
    item.currentImage = item.images[0]; // Retorna para a primeira imagem
  }
}
