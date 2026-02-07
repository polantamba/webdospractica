import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  subtitulo: string = "Cuidamos a lo aque mas quieres con servicio de calidad";

  //variable servicio señleccionado que contenga NINGUNA
  servicioSeleccionado: string = "ninuguno"

  servicios = [
    {
      id: 1,
      nombre: "Consulta General",
      decripcion: "Evalucion completa de tu mascota",
      img: "https://img.freepik.com/fotos-premium/medico-veterinario-gato-clinica-medicina-veterinaria-mascotas-gatos-atencion-medica-concepto-enfermedad-animal_151013-45211.jpg",
      activo: true
    },

    {
      id: 2,
      nombre: "Desparasitación",
      decripcion: "Cuida la salud de tu mascota",
      img: "https://neurovet.com.mx/wp-content/uploads/2018/10/Desparasitacion2-Destacada-800x600-1-600x450.jpg",
      activo: true
    },

    {
      id: 3,
      nombre: "Estetica",
      decripcion: "El cuidado de la imagen de tu mascota es primordial",
      img: "https://res.cloudinary.com/goengineco/image/upload/f_auto,q_auto,c_limit,w_750,fl_lossy/v1/pet-club/strapi-images/los_beneficios_de_la_estetica_canina_para_la_salud_y_el_bienestar_de_tu_perro_e9b76273ad",
      activo: false
    },
  ];

  //Variable 
  servicioFiltrados = this.servicios;

  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

  //Funcion para buscar servicios
  busqueda(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.subtitulo = `Resultados para: ${valor}`;

    this.servicioFiltrados = this.servicios.filter(s => 
      s.nombre.toLowerCase().includes(valor.toLowerCase())
    );
  }
}
