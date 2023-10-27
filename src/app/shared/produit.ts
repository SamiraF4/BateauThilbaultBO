export interface Produit {
  id: number; 
  name: string; 
  category: number; 
  type: string; 
  unit: string; 
  price: number; 
  price_on_sale: number; 
  discount: number; 
  sale: boolean; 
  quantity_stock: number; 
  quantity_sold: number; 
  comments: string; 
  availability: boolean; 
  owner: string; 
  reductionPercentage: number;
}
