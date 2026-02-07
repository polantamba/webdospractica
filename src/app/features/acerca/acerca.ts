import { Component } from '@angular/core';
import { Hero } from "../../share/hero/hero";

@Component({
  selector: 'app-acerca',
  imports: [Hero],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {
  masInformacion = [
    {
    titulo: 'Compromiso Médico',
    descripcion: 'Nos mantenemos en constante formación para ofrecer las técnicas más avanzadas en cirugía y medicina interna.'
  },
  {
    titulo: 'Atención Humana',
    descripcion: 'Entendemos que tu mascota es familia. Por eso, el trato cálido y la empatía son nuestra prioridad número uno.'
  },
  {
    titulo: 'Instalaciones Modernas',
    descripcion: 'Contamos con áreas separadas para caninos y felinos, reduciendo el estrés durante su visita a la clínica.'
  },
  {
    titulo: 'Responsabilidad Social',
    descripcion: 'Colaboramos con refugios locales para campañas de esterilización y salud preventiva para mascotas sin hogar.'
  },
  {
    titulo: 'Urgencias Reales',
    descripcion: 'Nuestro equipo está listo para actuar ante accidentes graves con protocolos de triaje profesional.'
  },
  {
    titulo: 'Bienestar Integral',
    descripcion: 'No solo curamos enfermedades, asesoramos sobre nutrición y comportamiento para una vida larga y feliz.'
  }
  ];
}
