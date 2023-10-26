export interface Produit {
  id: number; // L'identifiant du produit
  name: string; // Le nom du produit
  category: number; // L'identifiant de la catégorie
  type: string; // Le type du produit
  unit: string; // L'unité de mesure
  price: number; // Le prix du produit
  price_on_sale: number; // Le prix en promotion (le cas échéant)
  discount: number; // Le pourcentage de réduction
  sale: boolean; // Indique si le produit est en promotion
  quantity_stock: number; // La quantité en stock
  quantity_sold: number; // La quantité vendue
  comments: string; // Commentaires sur le produit
  availability: boolean; // Disponibilité du produit
  owner: string; // Le propriétaire du produit
  reductionPercentage: number;
}
