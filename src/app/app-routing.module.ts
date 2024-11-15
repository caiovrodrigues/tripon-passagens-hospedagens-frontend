import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
