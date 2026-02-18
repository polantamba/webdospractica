import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service';
import { Pet } from '../../models/pets';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {

  private mascotaServicio = inject(MascotaService);

  mascotas = signal<Pet[]>([]);

  ngOnInit(){
    this.mascotaServicio.getMascotas().subscribe(datos =>{
      this.mascotas.set(datos.data);
    })
  }

}
