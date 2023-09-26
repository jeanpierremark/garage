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
  ]},



  
   

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
