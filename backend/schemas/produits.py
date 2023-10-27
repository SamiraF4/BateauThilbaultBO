from sqlalchemy import Column, Integer, String, Float
from backend.utils.database import Base


class Produits(Base):
    __tablename__ = "produits"

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String)
    prix = Column(Float)
    prix_avec_reduction = Column(Float)
    pourcentage_reduction = Column(Float)
    stock = Column(Integer)
    vente = Column(Integer)
    commentaire = Column(String)

