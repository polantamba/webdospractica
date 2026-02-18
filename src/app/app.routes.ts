import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './share/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './share/formulario-cuenta/formulario-cuenta';
import { Login } from './share/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    //1. Ruta Inicial
    {path: '', component: Home},
    //2. Rutas de navegación
    {path: 'acerca', component: Acerca},
    {path: 'consultas', component: Consultas},
    {path: 'mascotas', component: Mascotas},
    {path: 'usuarios', component: Usuarios ,canActivate: [authGuard]},
    {path: 'cuenta', component: FormularioCuenta},
    {path: 'login', component: Login},
    //3. Redireccion si el usuario escribe una url que no existe
    //{path:'', component:Pagina404}
];
