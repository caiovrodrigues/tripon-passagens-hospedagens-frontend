import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components-perfil/dashboard/dashboard.component';
import { isLogadoGuard } from './guards/is-logado.guard';
import { HistoricoComponent } from './components-perfil/historico/historico.component';
import { PerfilComponent } from './components-perfil/perfil/perfil.component';
import { PassagemHotelComponent } from './components-perfil/passagem-hotel/passagem-hotel.component';
import { PassagemComponent } from './components-perfil/passagem/passagem.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isLogadoGuard],
    children: [
      { path: '', component: PerfilComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [adminGuard]},
      { path: 'passagens-hoteis', component: PassagemHotelComponent, canActivate: [adminGuard] },
      { path: 'passagens-hoteis-list', component: PassagemComponent, canActivate: [adminGuard] },
      { path: 'historico', component: HistoricoComponent}
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableViewTransitions: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
