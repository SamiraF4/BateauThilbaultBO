import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsFromJson(): Observable<Produit[]> {
    return this.http.get<Produit[]>("../../../assets/Products.json")
      .pipe(
        catchError((error: any) => {
          console.error('Error while fetching products:', error);
          return throwError(error); 
        })
      );
  }
}
