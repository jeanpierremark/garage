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
import { AddBagageComponent } from './main/add-bagage/add-bagage.component';
import { BagageComponent } from './main/bagage/bagage.component';
import { EditBagageComponent } from './main/edit-bagage/edit-bagage.component';
import { AddDepartComponent } from './main/add-depart/add-depart.component';
import { EditDepartComponent } from './main/edit-depart/edit-depart.component';
import { AddPassagerDepartComponent } from './main/add-passager-depart/add-passager-depart.component';
import { PassagerDepartComponent } from './main/passager-depart/passager-depart.component';
import { authGuard} from './auth.guard';
import { MesDepartComponent } from './main/mes-depart/mes-depart.component';
import { MesBagagesComponent } from './main/mes-bagages/mes-bagages.component';
import { DetailComponent } from './main/detail/detail.component';
import { CalendrierComponent } from './main/calendrier/calendrier.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
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
  {path:'editDepart', component:EditDepartComponent},
  {path:'newChauffeur', component:AddChauffeurComponent},
  {path:'chauffeur/newVoiture', component:AddVoitureComponent},
  {path:'chauffeur/allVoitures', component:VoitureChauffeurComponent},
  {path:'passager/addBagage', component:AddBagageComponent},
  {path:'passager/bagage', component:BagageComponent},
  {path:'passager/editBagage', component:EditBagageComponent},
  {path:'depart/addPassager', component:AddPassagerDepartComponent},
  {path:'depart/passager', component:PassagerDepartComponent},
  {path:'addDepart', component:AddDepartComponent},
  {path:'passager/mesDeparts', component:MesDepartComponent},
  {path:'passager/mesBagages', component:MesBagagesComponent},
  {path:'depart/deletePassager', component:PassagerDepartComponent},
  {path:'passager/perte', component:DetailComponent},
  {path:'calendrier', component:CalendrierComponent},
  ],
},



  
   

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
