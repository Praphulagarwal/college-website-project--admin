import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrincipalComponent } from './dashboard/about/principal/principal.component';
import { MainComponent } from './dashboard/main/main.component';



const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
{path: 'signup', component: SignupComponent},
  {path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: '', component: MainComponent},
    { path: 'about/principal', component: PrincipalComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
