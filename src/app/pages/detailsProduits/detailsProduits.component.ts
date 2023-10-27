import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/produit';
import { ProductsService } from '../../services/products.service';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-details-produits',
  templateUrl: './detailsProduits.component.html',
  styleUrls: ['./detailsProduits.component.css']
})
export class DetailsProduitsComponent implements OnInit {
  listeProduits: Produit[] = [];
  sortListeProduits: { [key: string]: Produit[] } = {};
  sortKeyList: string[] = [];
  reductionPercentageInput: number = 0;

  constructor(private productsService: ProductsService, private http: HttpClient) {}

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

  getDiscountPrice(price: number, discount: number): number {
    return Math.round(price * (1 - discount / 100) * 100) / 100;
  }

  getProduit(id: number): Produit | undefined {
    return this.listeProduits.find((product) => product.id === id);
  }

  sortArrayOfProducts(): void {
    this.listeProduits.forEach((product) => {
      if (!this.sortListeProduits[product.type]) {
        this.sortListeProduits[product.type] = [];
      }
      this.sortListeProduits[product.type].push(product);
    });

    this.sortKeyList = Object.keys(this.sortListeProduits);
  }

  saveProductChange(changeID: number): void {
    const changeStockInput = document.getElementById("changeStock") as HTMLInputElement;
    const changeStockValue = changeStockInput.value;

    const updateProduct = this.getProduit(changeID);

    if (updateProduct) {
      updateProduct.quantity_stock = parseFloat(changeStockValue);
    } else {
      console.error('Product not found');
    }
  }

  // Méthode pour envoyer la modification du pourcentage de réduction
  sendReductionPercentage(product: Produit): void {
    product.discount = this.reductionPercentageInput;
    console.log("testing")
    console.log(this.http.post<any>('http://localhost:8000/save_product', {
    'nom': product.name,
    'prix': product.price,
    'prix_avec_reduction': product.price_on_sale,
    'pourcentage_reduction': product.discount,
    'vente': product.quantity_sold,
    'stock': product.quantity_stock,
    'commentaire': product.comments,
    },
    {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000',
      }
    }).subscribe())
  }

  // Méthode pour envoyer toutes les modifications au backend (à implémenter)
  sendAllProductChanges(): void {
    // Envoi de toutes les modifications au backend
  }
}