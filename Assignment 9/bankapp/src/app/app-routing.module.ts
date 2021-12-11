import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent }   from './login/login.component';
import { MainMenuComponent }   from './main-menu/main-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { 
    path: 'login',  component: LoginComponent, data: { title: '..>My Login<..' } },
    { path: 'lhsnav/:id',component: SidenavComponent,outlet: 'sbar'},
    { path: 'mainpage',  component: MainMenuComponent,canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
