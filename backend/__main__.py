from fastapi import Depends, FastAPI, Request
from sqlalchemy.orm import Session, sessionmaker
import uvicorn

from schemas.produits import Produits as SchemaProd
import schemas.produits as FileSchemaProduit
from models.produits import Produits as modProd
from utils.database import engine, Base, SessionLocal
from fastapi.middleware.cors import CORSMiddleware

FileSchemaProduit.Base.metadata.create_all(bind=engine)


app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency


@app.post("/save_product")
def save_product(infos_produit: modProd, db: Session = Depends(get_db)):
    produit = db.query(SchemaProd).filter(SchemaProd.nom == infos_produit.nom).first()
    data = SchemaProd(
        nom=infos_produit.nom,
        prix=infos_produit.prix,
        prix_avec_reduction=infos_produit.prix_avec_reduction,
        pourcentage_reduction=infos_produit.pourcentage_reduction,
        stock=infos_produit.stock,
        vente=infos_produit.vente,
        commentaire=infos_produit.commentaire,
    )
    if produit:
        produit = data
    if not produit:
        db.add(data)
        db.commit()
        db.refresh(data)
    return data


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
