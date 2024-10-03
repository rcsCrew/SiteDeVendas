import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
      this.items = this.produtosService.getItems();
  }
}
