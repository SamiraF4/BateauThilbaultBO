import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsProduitsComponent } from './pages/detailsProduits/detailsProduits.component';
import { DonneesHistoriquesComponent } from './pages/donneesHistoriques/donneesHistoriques.component'; 
import { FormsModule } from '@angular/forms'; 

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Page' } },
  { path: 'produits', component: DetailsProduitsComponent, data: { title: 'Products List' } },
  { path: 'donneesHistoriques', component: DonneesHistoriquesComponent, data: { title: 'Historical Data' } },
  { path: '**', component: HomeComponent, data: { title: 'Home Page' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
