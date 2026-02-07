import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { NavBar } from './share/nav-bar/nav-bar';
import { Hero } from './share/hero/hero';
import { initFlowbite } from 'flowbite';
import { Servicios } from './share/servicios/servicios';
import { Footer } from './share/footer/footer';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, NavBar, Hero, Servicios, Footer, Acerca,Consultas],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
      initFlowbite();
    
  }
}
