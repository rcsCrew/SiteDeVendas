import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  registrarData = {
    username: '',
    password: '',
    email: ''  // Incluindo um campo de email para o registro
  };

  // Função para realizar o registro
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const headers = { 'Content-Type': 'application/json' };

    // Enviando os dados para o endpoint que lida com o registro de novos usuários
    this.http.post<any>('https://ramonsenger.com/testes/registrar.php', this.registrarData, { headers })
      .subscribe(response => {
        console.log('Response:', response);

        if (response.status === 'success') {
          alert('Usuário registrado com sucesso!');

          // Opcionalmente, redireciona o usuário para a página de login ou dashboard
          this.router.navigate(['/login']);
        } else {
          alert(response.message);
        }
      }, error => {
        console.log('Erro: ', error);
        alert('Erro ao tentar registrar. Tente novamente mais tarde.');
      });
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
