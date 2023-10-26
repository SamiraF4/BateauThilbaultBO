import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Produit } from '../../shared/produit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  produits: Produit[] = [];
  allProducts: Produit[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Charger tous les produits au départ
    this.productsService.getProductsFromJson().subscribe(
      (res: Produit[]) => {
        this.produits = res;
        this.allProducts = res; // Sauvegarder tous les produits dans une variable séparée
      },
      (err) => {
        console.error('Failed loading JSON data', err);
      }
    );
  }

  filterProducts(category: number) {
    if (category === -1) {
      // Afficher uniquement les produits en promotion (pourcentage de promotion différent de 0 et non égal à '-')
      this.produits = this.allProducts.filter(produit => {
        const reductionPercentage = produit.reductionPercentage;
        return typeof reductionPercentage === 'number' && reductionPercentage !== 0;
      });
    } else if (category === -2) {
      // Afficher tous les produits
      this.produits = this.allProducts;
    } else {
      // Filtrer en fonction de la catégorie
      this.produits = this.allProducts.filter(produit => {
        if (typeof produit.category === 'number' && produit.category === category) {
          return true;
        }
        return false;
      });
    }
  }
  
  
  
  
  
}
