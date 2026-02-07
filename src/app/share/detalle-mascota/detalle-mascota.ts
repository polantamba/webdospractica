import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-mascota',
  imports: [CommonModule],
  templateUrl: './detalle-mascota.html',
  styleUrl: './detalle-mascota.css',
})
//componente hijo 
export class DetalleMascota {
  //recibe un paramettro desde el componenete padre - consulta
  @Input() mascota?: Mascota;

  //el componnete hijo detalle envia  en este casao un evento
  @Output() notificarAccion = new EventEmitter<string>();

  //metodo que se va aactivar cuando haga click en el boton del componente Hijo
  avisarIngreso(): void {
    if (this.mascota) {
      this.notificarAccion.emit(
        `El paciente ${this.mascota.nombre} ha sido llamada a consulta`,
      );
    }
  }
}
