import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { DetailsProduitsComponent } from './pages/detailsProduits/detailsProduits.component';
import { ProductsService } from './services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonneesHistoriquesComponent } from './pages/donneesHistoriques/donneesHistoriques.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { DashboardCaComponent } from './features/dashboardCa/dashboardCa.component';
import { DashboardCIComponent } from './features/dashboardCi/dashboardCi.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailsProduitsComponent,
    DonneesHistoriquesComponent,
    DashboardComponent,
    AuthentificationComponent,
    DashboardCaComponent,
    DashboardCIComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,  
    NgxChartsModule,
  ],
  providers: [HttpClient, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
