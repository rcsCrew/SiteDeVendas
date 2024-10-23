import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TcheGuri';
  usuarioNome: string | null = null; // Variável para armazenar o nome do usuário

  ngOnInit() {
    this.usuarioNome = localStorage.getItem('usuarioNome'); // Obtém o nome do usuário do localStorage
  }

  isLoggedIn(): boolean {
    return this.usuarioNome !== null; // Verifica se o usuário está logado
  }

  logout() {
    localStorage.removeItem('authToken'); // Remover token ao deslogar
    localStorage.removeItem('usuarioNome'); // Remover nome do usuário ao deslogar
    this.usuarioNome = null; // Limpa a variável local
  }
}
