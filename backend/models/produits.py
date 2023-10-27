from pydantic import BaseModel


class Produits(BaseModel):
    nom: str
    prix: float
    prix_avec_reduction: float
    pourcentage_reduction: float
    stock: int
    vente: int
    commentaire: str

    class Config:
      orm_mode = True

