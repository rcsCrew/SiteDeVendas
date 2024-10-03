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
      { id: '001', nome: 'camisa', descricao: 'camisa de algodão', preco: 50.00, quantidade: 10, promocao: false },
      { id: '002', nome: 'camisa2', descricao: 'camisa de algodão2', preco: 60.00, quantidade: 20, promocao: false },
      { id: '003', nome: 'camisa3', descricao: 'camisa de algodão3', preco: 70.00, quantidade: 30, promocao: true },
      { id: '004', nome: 'camisa4', descricao: 'camisa de algodão4', preco: 80.00, quantidade: 40, promocao: false }
    ];
  }

  getItems() {
    return this.items; // Método para retornar os itens da lista
  }
}
