import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/produit';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-donnees-historiques',
  templateUrl: './donneesHistoriques.component.html',
  styleUrls: ['./donneesHistoriques.component.css']
})
export class DonneesHistoriquesComponent implements OnInit {
  listeProduits: Produit[] = [];
  selectedOperation: string = ''; // Ajout, retrait-par-vente, retrait-par-invendus
  prixAchat: number = 0;
  prixVente: number = 0;
  quantity: number = 0; // Ajout de la quantité
  price: number = 0; // Ajout du prix
  chiffreAffaires: number = 0;
  chiffreAffairesAnnuel: number = 0; // Renommage de chiffreAffaires à chiffreAffairesAnnuel
  resultatComptableAnnuel: number = 0;
  impotSurSocietesAnnuel: number = 0;
  reductionPercentageInput: number = 0; // Ajout de la propriété reductionPercentageInput
  stockOperations: any[] = []; // Assurez-vous de définir le type correct

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProductsFromJson().subscribe(
      (res: Produit[]) => {
        this.listeProduits = res;
        this.sortArrayOfProducts();
      },
      (err) => {
        console.error('Failed loading JSON data', err);
      }
    );
  }

  sortArrayOfProducts(): void {
    const sortListeProduits: { [key: string]: Produit[] } = {};

    this.listeProduits.forEach((product) => {
      if (!sortListeProduits[product.type]) {
        sortListeProduits[product.type] = [];
      }
      sortListeProduits[product.type].push(product);
    });

    const sortKeyList = Object.keys(sortListeProduits);

    // Assurez-vous que sortListeProduits et sortKeyList existent dans votre modèle de données.
  }

  addStockOperation(): void {
    // Logique pour ajouter une opération de stock
  }

  calculateChiffreAffaires(): void {
    // Logique pour calculer le chiffre d'affaires
  }

  calculateResultatComptable(): void {
    // Logique pour calculer le résultat comptable
  }

  sendReductionPercentage(product: Produit): void {
    product.discount = this.reductionPercentageInput;
  }
}
