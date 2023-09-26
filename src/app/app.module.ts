import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { VoitureComponent } from './main/voiture/voiture.component';
import { ChauffeurComponent } from './main/chauffeur/chauffeur.component';
import { PassagerComponent } from './main/passager/passager.component';
import { DepartComponent } from './main/depart/depart.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { FooterComponent } from './static/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VoitureComponent,
    ChauffeurComponent,
    PassagerComponent,
    DepartComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
