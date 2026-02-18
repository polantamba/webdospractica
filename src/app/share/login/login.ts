import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})



export class Login {

  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password);
    alert('Sesión iniciada');
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada');
  }

}
