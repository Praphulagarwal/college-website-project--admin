import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule,MatCardModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PrincipalComponent } from './main/about/principal/principal.component';
import { FrontEndService } from './services/front-end.service';
import { HttpClientModule } from '@angular/common/http';
import { StPlacementComponent } from './Placements/st-placement/st-placement.component';
import { CseComponent } from './Departments/cse/cse.component';
import { EceComponent } from './Departments/ece/ece.component';
import { CeComponent } from './Departments/ce/ce.component';
import { MeComponent } from './Departments/me/me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EeComponent } from './Departments/ee/ee.component';
import { NoticeComponent } from './notice/notice.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PrincipalComponent,
    StPlacementComponent,
    CseComponent,
    EceComponent,
    CeComponent,
    MeComponent,
    ContactsComponent,
    EeComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [FrontEndService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
