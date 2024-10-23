import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

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
  redirect(){
    this.router.navigate(['/home']);
  }
  onSubmit() {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>('https://ramonsenger.com/testes/index.php', this.loginData, { headers })
      .subscribe(async response => {
        console.log('Response:', response);
        if (response.status === 'success') {
          // Armazena o token e o nome do usuário no localStorage
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('usuarioNome', this.loginData.username); // Armazena o nome do usuário

          // Redireciona para a página hub

          // Configura a expiração do token para 4 minutos
          setTimeout(() => {
            this.logout();  // Função para deslogar após 4 minutos
          }, 30 * 60 * 1000);  // 4 minutos em milissegundos

        } else {
          alert(response.message);
        }
        this.router.navigate(['/home']);
        await delay(1000)
        window.location.reload();
      }, error => {
        console.log('Erro: ', error);
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
      });
  }

  // Função de logout para remover o token e redirecionar para a página de login
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuarioNome'); // Remove o nome do usuário ao deslogar
    alert('Sua sessão expirou. Faça login novamente.');
    this.router.navigate(['/login']);
  }

  navigateToRegistrar() {
    this.router.navigate(['/registrar']);
  }
}
