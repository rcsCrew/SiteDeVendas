import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  items: any[] = []; // Tipagem correta como array de objetos

  constructor() {
    this.fetchItems();
    this.aplicarDescontoPromocao();
  }

  fetchItems() {
    this.items = [
      {
        id: '001',
        marca: 'nike',
        nome: 'Tênis Nike Freak 5 Masculino',
        disponibilidade: 'imediato',
        descricao: 'camisa de algodão',
        precoOriginal: 50,
        preco: 50.00,
        quantidade: 10,
        promocao: false,
        images: [ // Mudança de "image" para "images" para ser consistente
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_qix_golden_branco_preto_5940_1_46c540303197ee4156e908c66231b78f.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_qix_golden_branco_preto_5940_3_e933708abd09cca040dae265067e82ef.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_qix_golden_branco_preto_5940_4_4bb400d415c881b0afa3069280c3d6fc.jpg',
        ],
        tamanhosDisponiveis: ['P', 'M', 'G'], // Adicionando tamanhos
        coresDisponiveis: ['Azul', 'Preto'], // Adicionando cores
        tamanhoSelecionado: null, // Inicializando como null
        corSelecionada: null, // Inicializando como null
        currentImage: 'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_qix_golden_branco_preto_5940_1_46c540303197ee4156e908c66231b78f.jpg' // Imagem padrão

      },
      {
        id: '002',
        marca: 'nike',
        nome: 'Tênis Nike Freak 5 Masculino',
        disponibilidade: '2 dias',
        descricao: 'camisa de algodão2',
        precoOriginal: 60, // Adicionei precoOriginal para manter consistência
        preco: 60.00,
        quantidade: 20,
        promocao: false,
        images: [ // Mudança de "image" para "images"
          'https://images.tcdn.com.br/img/img_prod/775752/tenis_hocks_bold_petitpoa_4789_1_f7f7cd692741019b32c3b08db766674b.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_bold_petitpoa_4789_3_286d5be82cc69614c6bc9313024011d8.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_bold_petitpoa_4789_4_d06c83b8d709577dd9c886a041acc77d.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_bold_petitpoa_4789_5_08d73582324a9c313fe556dee6f36cb1.jpg'
        ],
        tamanhosDisponiveis: ['P', 'M', 'G'], // Adicionando tamanhos
        coresDisponiveis: ['Azul', 'Preto'], // Adicionando cores
        tamanhoSelecionado: null, // Inicializando como null
        corSelecionada: null, // Inicializando como null
      },
      {
        id: '003',
        marca: 'nike',
        nome: 'Tênis Nike Freak 5 Masculino',
        disponibilidade: 'Encomenda',
        descricao: 'camisa de algodão3',
        precoOriginal: 70, // Adicionei precoOriginal para manter consistência
        preco: 70.00,
        quantidade: 30,
        promocao: true,
        images: [ // Mudança de "image" para "images"
          'https://images.tcdn.com.br/img/img_prod/775752/tenis_hocks_do_vale_ss_x_tech_branco_6500_1_9538716ae758cd8d7effebdba18f55c3.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_do_vale_ss_x_tech_branco_6500_2_3e977ee7697a262c15470d329c13523f.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_do_vale_ss_x_tech_branco_6500_3_b9709f99e28a5f36831088fa57b580e9.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_hocks_do_vale_ss_x_tech_branco_6500_4_4458104f1b9e1114894b2d0af9f18ce4.jpg'
        ],
        tamanhosDisponiveis: ['P', 'M', 'G'], // Adicionando tamanhos
        coresDisponiveis: ['Azul', 'Preto'], // Adicionando cores
        tamanhoSelecionado: null, // Inicializando como null
        corSelecionada: null, // Inicializando como null
      },
      {
        id: '004',
        marca: 'nike',
        nome: 'Tênis Nike Freak 5 Masculino',
        disponibilidade: 'Retirada na loja',
        descricao: 'camisa de algodão4',
        precoOriginal: 80, // Adicionei precoOriginal para manter consistência
        preco: 80.00,
        quantidade: 40,
        promocao: false,
        images: [ // Mudança de "image" para "images"
          'https://images.tcdn.com.br/img/img_prod/775752/tenis_freeday_caminhada_thunder_preto_branco_unissex_6378_2_7aa2d7856d249765bb1b002c88353138.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_freeday_caminhada_thunder_preto_branco_unissex_6378_3_f120546aec8e162c7f4d2fe795ff9d01.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_freeday_caminhada_thunder_preto_branco_unissex_6378_4_431f62ac0ae89834f75892d7c5c8f623.jpg',
          'https://images.tcdn.com.br/img/img_prod/775752/90_tenis_freeday_caminhada_thunder_preto_branco_unissex_6378_5_cad43e6997da378580733cc40a38e355.jpg'
        ],
        tamanhosDisponiveis: ['P', 'M', 'G'], // Adicionando tamanhos
        coresDisponiveis: ['Azul', 'Preto'], // Adicionando cores
        tamanhoSelecionado: null, // Inicializando como null
        corSelecionada: null, // Inicializando como null
      }
    ];
  }

  aplicarDescontoPromocao() {
    this.items = this.items.map(item => {
      if (item.promocao) {
        return { ...item, preco: item.preco * 0.8 }; // Aplica 20% de desconto
      }
      return item;
    });
  }

  getItems() {
    return this.items; // Método para retornar os itens da lista com desconto aplicado, se aplicável
  }
}
