  import { CommonModule } from '@angular/common';
  import { Component, inject } from '@angular/core';
  import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
  import { ValidationError } from '@angular/forms/signals';
  import { repeat } from 'rxjs';

  @Component({
    selector: 'app-formulario-cuenta',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './formulario-cuenta.html',
    styleUrl: './formulario-cuenta.css',
  })
  export class FormularioCuenta {

    private fb = inject(FormBuilder);

    reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    //reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

    formCuenta = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
        comentario: ['', [Validators.required]]
      },
      {validators: this.validarClaves},
    );

    validarClaves(control: AbstractControl): ValidationErrors | null {
      const clave1 = control.get('password')?.value;
      const clave2 = control.get('repeatPassword')?.value;

      return clave1 === clave2 ? null : { noCoinciden: true };
    }

    //metodo para errores personalizados

    mostrarError(campo: string, tipoError: string): boolean{
      const input = this.formCuenta.get(campo);

      if (input && input.invalid && input.touched) {
          return input.hasError(tipoError);
      }
      return false;
    }
    registrar() {
      
    if (this.formCuenta.valid) {

      const contenido = new URLSearchParams
      contenido.set('form-name', 'contacto');
      contenido.set('email', this.formCuenta.value.email ?? '');
      contenido.set('comentario', this.formCuenta.value.comentario ?? '');

      fetch('/',{
        method: 'POST',
        //indicar que los datos que se van a enviar estan codificados como una url no como un json
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //convertir todo el objeto a una cadena de texto lista para enviarse
        body: contenido.toString()
          
      })
        .then(()=>{
          alert("Formulario enviado");
          this.formCuenta.reset();
        })
        .catch((error)=>
          console.log("Error al enviar el formulario", error));
        }
        
      console.log('La cuenta creada es ${this.formCuenta}.value');
      alert('¡Registro exitoso! Bienvenido.');

    }
  }


  