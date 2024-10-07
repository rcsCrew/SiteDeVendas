import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
}





