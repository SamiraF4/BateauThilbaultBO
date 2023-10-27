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
  productId: number = 0;
  quantity: number = 0; // Ajout de la quantité
  price: number = 0; // Ajout du prix
  chiffreAffaires: number = 0;
  chiffreAffairesAnnuel: number = 0; // Renommage de chiffreAffaires à chiffreAffairesAnnuel
  resultatComptableAnnuel: number = 0;
  impotSurSocietesAnnuel: number = 0;
  reductionPercentageInput: number = 0; // Ajout de la propriété reductionPercentageInput
  stockOperations: any[] = []; 

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

  }

  addStockOperation(productId: number, quantity: number, operationType: string): void {
    if (operationType === 'ajout') {
      // Ajoutez la quantité au stock du produit avec l'ID 'productId'
    } else if (operationType === 'retrait') {
      // Retirez la quantité du stock du produit avec l'ID 'productId'
    }
    // Assurez-vous de mettre à jour les données dans votre application ou base de données.
  }
  

  calculateChiffreAffaires(period: string): number {
    let totalSales = 0;
    // Récupérez les ventes pour la période spécifiée (par exemple, ventes mensuelles)
    // Calculez le chiffre d'affaires en multipliant la quantité vendue par le prix du produit pour chaque vente
    // Ajoutez les montants de toutes les ventes
    return totalSales;
  }
  

  calculateResultatComptable(): number {
    let totalRevenue = 0;
    let totalCostOfGoodsSold = 0;
    let otherExpenses = 0;
    let otherIncome = 0;
  
    // Calculez les revenus totaux, les coûts des ventes et les autres dépenses et revenus
  
    const resultatComptable = totalRevenue - totalCostOfGoodsSold - otherExpenses + otherIncome;
    return resultatComptable;
  }
  

  sendReductionPercentage(product: Produit): void {
    product.discount = this.reductionPercentageInput;
  }
}
