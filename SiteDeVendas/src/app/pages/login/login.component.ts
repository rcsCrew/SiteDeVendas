import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // Função para login com Gmail
  loginWithGmail() {
    alert('Login com Gmail não implementado.');
    // Aqui você integraria com a API de autenticação do Google
  }

  // Função para login com Discord
  loginWithDiscord() {
    alert('Login com Discord não implementado.');
    // Aqui você integraria com a API de autenticação do Discord
  }

  // Função para realizar o login
  onLogin() {
    console.log('Usuário:', this.username, 'Senha:', this.password);
    alert('Login não implementado.');
    // Aqui você implementaria a lógica de autenticação do usuário
  }
}
