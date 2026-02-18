import { Component, inject, signal, Signal } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario-servicio';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  editarUsuario(_t35: Usuario) {
    throw new Error('Method not implemented.');
  }

  private servicioUsuario = inject(UsuarioService);

  public servicioAuth = inject(AuthService);

  listaUsuarios = signal<Usuario[]>([]);

  editando = false;

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe((usuarios) => {
      this.listaUsuarios.set(usuarios);
    }
    );
  }

  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).
        subscribe(() => {
          this.obtenerUsuarios();
          this.resetear();
        });
    }
    else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }

  //metodo para eliminar usuario
  eliminarUsuario(id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
        //  this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      });
    }
  }

  //metodo para poner los datos del usuario en el formulario
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = {
      name: '',
      email: '',
      phone: '',
      password: '',
      rol: 'EMPLEADO'

    };
  }


}
