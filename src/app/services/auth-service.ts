import { inject, Injectable, signal } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { UsuarioService } from './usuario-servicio';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioService);

  //local storage 
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  //Accedemos al rol del usuario 
  rolActual = signal <string | null>(localStorage.getItem('rol'));



  usuario: User | null = null;

  

  login(email: string, password: string) : Observable <boolean> {
  return this.servicioUsuario.getUsuarios().pipe(
  map(usuarios => {
    const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);
    if (usuarioCoincide) {
    localStorage.setItem('sesion', 'true');
    //guardar datos
    localStorage.setItem('usuario', JSON.stringify(usuarioCoincide));
    //rol
    localStorage.setItem('rol', usuarioCoincide.rol);
    this.rolActual.set(usuarioCoincide.rol);

    this.sesionIniciada.set(true);
    return true;
    }
    return false;
  })
)
  }
  
  
  

  logout(){
    localStorage.removeItem('sesion');
    localStorage.removeItem('usuario');
    this.sesionIniciada.set(false);
    localStorage.removeItem('rol');
    this.rolActual.set(null);
  }
  
}
