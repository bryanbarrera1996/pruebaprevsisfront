import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
