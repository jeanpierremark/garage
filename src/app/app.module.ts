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
import { AddChauffeurComponent } from './main/add-chauffeur/add-chauffeur.component';
import { AddBagageComponent } from './main/add-bagage/add-bagage.component';
import { AddDepartComponent } from './main/add-depart/add-depart.component';
import { AddVoitureComponent } from './main/add-voiture/add-voiture.component';
import { EditVoitureComponent } from './main/edit-voiture/edit-voiture.component';
import { EditPassagerComponent } from './main/edit-passager/edit-passager.component';
import { EditChauffeurComponent } from './main/edit-chauffeur/edit-chauffeur.component';
import { EditBagageComponent } from './main/edit-bagage/edit-bagage.component';
import { EditDepartComponent } from './main/edit-depart/edit-depart.component';
import { VoitureChauffeurComponent } from './main/voiture-chauffeur/voiture-chauffeur.component';


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
    FooterComponent,
    AddChauffeurComponent,
    AddBagageComponent,
    AddDepartComponent,
    AddVoitureComponent,
    EditVoitureComponent,
    EditPassagerComponent,
    EditChauffeurComponent,
    EditBagageComponent,
    EditDepartComponent,
    VoitureChauffeurComponent,
    
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
