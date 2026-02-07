import { Component } from '@angular/core';
import { Hero } from '../../share/hero/hero';
import { Servicios } from '../../share/servicios/servicios';
import { Footer } from '../../share/footer/footer';
import { Pacientes } from "../../share/pacientes/pacientes";
import { Acerca } from '../acerca/acerca';
import { Consultas } from '../consultas/consultas';




@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Footer, Pacientes, Acerca, Consultas],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
