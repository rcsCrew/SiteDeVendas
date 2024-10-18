import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  // Função para realizar o registro
  onRegister() {
    console.log('Usuário:', this.username, 'Senha:', this.password, 'Email:', this.email);
    alert('Registro não implementado.');
    // Aqui você implementaria a lógica para cadastrar o usuário
  }
}
