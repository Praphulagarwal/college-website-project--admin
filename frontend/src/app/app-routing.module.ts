import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './main/about/principal/principal.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

{ path: '' , component: MainComponent },
    {path: 'about/principal', component: PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
