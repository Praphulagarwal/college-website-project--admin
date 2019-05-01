import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './main/about/principal/principal.component';
import { MainComponent } from './main/main.component';
import { StPlacementComponent } from './Placements/st-placement/st-placement.component';
import { CseComponent } from './Departments/cse/cse.component';
import { EceComponent } from './Departments/ece/ece.component';
import { CeComponent } from './Departments/ce/ce.component';
import { MeComponent } from './Departments/me/me.component';
import { EeComponent } from './Departments/ee/ee.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [

{ path: '' , component: MainComponent },
    {path: 'about/principal', component: PrincipalComponent},
    {path: 'Placements/stplacements', component: StPlacementComponent},
    { path: 'Departments/cse', component: CseComponent},
    { path: 'Departments/ece', component: EceComponent},
    { path: 'Departments/ce', component: CeComponent},
    { path: 'Departments/me', component: MeComponent},
    { path: 'Departments/ee', component: EeComponent},
    { path: 'notices', component: NoticeComponent},
    { path: 'contact-us', component: ContactsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
