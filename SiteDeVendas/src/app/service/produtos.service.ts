import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  items: any[] = []; // Tipagem correta como array de objetos

  constructor() {
    this.fetchItems();
  }

  fetchItems() {
    this.items = [
      { id: '001', nome: 'Tênis Nike Freak 5 Masculino', descricao: 'camisa de algodão', preco: 50.00, quantidade: 10, promocao: false ,image: 'https://imgnike-a.akamaihd.net/360x360/026812IM.jpg'},
      { id: '002', nome: 'Tênis Nike Freak 5 Masculino', descricao: 'camisa de algodão2', preco: 60.00, quantidade: 20, promocao: false ,image: 'https://imgnike-a.akamaihd.net/360x360/026812IM.jpg'},
      { id: '003', nome: 'Tênis Nike Freak 5 Masculino', descricao: 'camisa de algodão3', preco: 70.00, quantidade: 30, promocao: true ,image: 'https://imgnike-a.akamaihd.net/360x360/026812IM.jpg'},
      { id: '004', nome: 'Tênis Nike Freak 5 Masculino', descricao: 'camisa de algodão4', preco: 80.00, quantidade: 40, promocao: false, image: "https://imgnike-a.akamaihd.net/360x360/026812IM.jpg"}
    ];
  }

  getItems() {
    return this.items; // Método para retornar os itens da lista
  }
}
