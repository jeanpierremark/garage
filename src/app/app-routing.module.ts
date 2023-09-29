import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { VoitureComponent } from './main/voiture/voiture.component';
import { DepartComponent } from './main/depart/depart.component';
import { HomeComponent } from './main/home/home.component';
import { PassagerComponent } from './main/passager/passager.component';
import { ChauffeurComponent } from './main/chauffeur/chauffeur.component';
import { EditChauffeurComponent } from './main/edit-chauffeur/edit-chauffeur.component';
import { EditPassagerComponent } from './main/edit-passager/edit-passager.component';
import { EditVoitureComponent } from './main/edit-voiture/edit-voiture.component';
import { AddChauffeurComponent } from './main/add-chauffeur/add-chauffeur.component';
import { AddVoitureComponent } from './main/add-voiture/add-voiture.component';
import { VoitureChauffeurComponent } from './main/voiture-chauffeur/voiture-chauffeur.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  {path: 'home', component:HomeComponent,
  children:[
  {path:'accueil', component:DashboardComponent},
  {path:'voiture', component:VoitureComponent},
  {path:'depart', component:DepartComponent},
  {path:'passager', component:PassagerComponent},
  {path:'chauffeur', component:ChauffeurComponent},
  {path:'editChauffeur', component:EditChauffeurComponent},
  {path:'editPassager', component:EditPassagerComponent},
  {path:'editVoiture', component:EditVoitureComponent},
  {path:'newChauffeur', component:AddChauffeurComponent},
  {path:'chauffeur/newVoiture', component:AddVoitureComponent},
  {path:'chauffeur/allVoitures', component:VoitureChauffeurComponent},
  ]},



  
   

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
