import { Component } from '@angular/core';
import { NavBar } from "../../share/nav-bar/nav-bar";
import { Footer } from "../../share/footer/footer";
import { Hero } from "../../share/hero/hero";
import { Formulario } from "../../share/formulario/formulario";

@Component({
  selector: 'app-usuarios',
  imports: [NavBar, Footer, Hero, Formulario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  

}
