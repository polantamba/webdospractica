import { Component } from '@angular/core';
import { DetalleMascota } from '../../share/detalle-mascota/detalle-mascota';
import { Mascota } from '../../models/mascota';
import { Hero } from '../../share/hero/hero';

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascota,Hero],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas: Mascota[] =[
    { id: 1, nombre: "Ramón", especie: "Perro", historial: "Vacunas al día" },
    { id: 2, nombre: "Lucky", especie: "Gato", historial: "Requiere desparasitación" },
    { id: 3, nombre: "Valentina", especie: "Coneja", historial: "Requiere rehabilitación" }
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeActivo:string='';

  verDetalle(mascota:Mascota){
    this.mascotaSeleccionada=mascota;
  }

  procesarAviso(mensaje:string){
    this.mensajeActivo=mensaje;
  } 

}
